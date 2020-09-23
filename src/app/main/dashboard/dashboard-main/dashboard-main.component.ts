import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import * as shape from 'd3-shape';
import { fuseAnimations } from '@fuse/animations';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { InvoiceValueService } from 'app/shared/services/invoices-values.service';
import { CardService } from 'app/shared/services/card.service';
import { CardFilter } from 'app/shared/filters/card.filter';
import { CardChartValuesService } from 'app/shared/services/card_chart_value';
import { Login } from 'app/shared/models/login.model';
import { GetTokenDataService } from 'app/shared/services/user.service';




@Component({
    selector: 'project-dashboard',
    templateUrl: './dashboard-main.component.html',
    styleUrls: ['./dashboard-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProjectDashboardComponent implements OnInit {
    selectedOut = 'this_month_outcome_value';
    selectedIn = 'this_month_income_value';
    public user: Login;

    selectedOption: string;
    projects: any[];
    selectedProject: any;
    outSelected: string;
    inSelected: string;
    inOutValues: number


    // FOR CHART INCOME-OUTCOME
    widgetIncomeOutcomeColors: any = {};
    widgetIncomeOutcomeChartType: any = {};
    widgetIncomeOutcomeLabel: any[] = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    widgetIncomeOutcomeChartDataSet: any = {}
    widgetIncomeOutcomeChartOptions: any = {}
    chartValue: any[] = []
    widget1SelectedYear = '2016';
    widget5SelectedDay = 'today';
    loadedChart: boolean = false


    // FOR CARD LIMIT CHART
    widget5: any = {};
    value = {}
    obj = []

    // FOR INVOICES VALUES
    public valueIncome: Observable<any>[];
    public valueOutcome: Observable<any>[];
    public invoiceValue: (BaseModel: any) => any;

    // FOR CREDIT CARDS VALUE
    public cards: string[];
    displayedColumns: string[] = [
        'HOLDER',
        'BANK',
        'Card Number',
        'Card Limit',
        'Usage',
        'Usage (%)',
        'Remaining'
    ];

    // FOR DEBIT CARDS VALUE
    public cardsDebit: string[];
    displayedColumnsDebit: string[] = [
        'HOLDER',
        'BANK',
        'Card Number',
        'Balance'
    ];

    public dateNow = Date.now();


    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
   
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        public invoiceValueService: InvoiceValueService,
        public cardService: CardService,
        public cardChartValuesService: CardChartValuesService,
        public getTokenDataService: GetTokenDataService
    ) {


    }

    ngOnInit(): void {
        this.user = this.getTokenDataService.getUser();
        this.loadCredit();
        this.loadDebit();
        this.loadInvoiceValue();
        this.chart()


        /**
        * Widget 5
        */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: true,
            showXAxisLabel: true,
            xAxisLabel: 'Cards',
            showYAxisLabel: true,
            yAxisLabel: 'Limits',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: (ev) => {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: shape.curveBasis
            }
        };
    }

    public loadCreditChart() {
        var i = 0
        var usage
        var total

        this.cards.forEach(card => {
            usage = Number(card['balance']) * (-1)

            if (usage < 0) {
                total = Number(card['card_limit']) - usage
                usage = 0
            }
            else {
                total = Number(card['card_limit']) - usage
            }
            this.value[i] =
            {
                name:
                    card['chequing']['bank']['bank_initials']
                    + ' '
                    + card['chequing']['holder']['holder_name']
                    + ' ' + card['card_number'],
                series: [
                    {
                        name: 'Usage',
                        value: usage
                    },
                    {
                        name: 'Remaining',
                        value: total
                    },
                ]
            };
            this.obj.push(this.value[i])
            i = i + 1
        })
    };

    // GET INVOICE VALUE 
    public loadInvoiceValue(): void {
        this.invoiceValueService
            .get()
            .subscribe((response: any) => {
                this.invoiceValue = response.results;
                this.valueIncome = response.results.this_month_income_value;
                this.valueOutcome = response.results.this_month_outcome_value;
            });
    }

    // GET CREDIT CARDS 
    public loadCredit(): void {
        const filter = new CardFilter({
            is_credit_card: true
        });
        this.cardService
            .get(filter.toQueryString())
            .subscribe((response: any) => {
                this.cards = response.results;
                this.loadCreditChart();
            });
    }

    // GET DEBIT CARDS 
    public loadDebit(): void {
        const filter = new CardFilter({
            is_credit_card: false
        });

        this.cardService
            .get(filter.toQueryString())
            .subscribe((response: any) => {
                this.cardsDebit = response.results;
            });
    }


    public changeValue($event) {
        if ($event === 'this_month_income_value') {
            this.valueIncome = this.invoiceValue['this_month_income_value']
        };
        if ($event === 'last_month_income_value') {
            this.valueIncome = this.invoiceValue['last_month_income_value']
        };
        if ($event === 'this_month_outcome_value') {
            this.valueOutcome = this.invoiceValue['this_month_outcome_value']
        };
        if ($event === 'last_month_outcome_value') {
            this.valueOutcome = this.invoiceValue['last_month_outcome_value']
        };
    }

    public calculateUsage(balance, card_limit) {
        if (card_limit == undefined) {
            return Number(balance) * (-1)
        };
        return ((100 * Number(balance)) / Number(card_limit)) * (-1);
    }

    public calculateRemaining(balance, card_limit) {
        return card_limit - (Number(balance) * (-1));
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    // FOR CHART INCOME OUTCOME
    public chart() {
        this.cardChartValuesService
            .get()
            .subscribe((response: any) => {
                this.chartValue = response.values;
                this.inOutValues = response.inLessOut;
                this.chartIncomeOutcome();
                this.loadedChart = true;
            });
    }

    public chartIncomeOutcome() {
        this.widgetIncomeOutcomeColors = {
            colors:
                [{
                    backgroundColor: "rgba(30, 136, 229, 0.87)",
                    borderColor: "rgba(30, 136, 229, 0.87)",
                    pointBackgroundColor: "rgba(30, 136, 229, 0.87)",
                    pointBorderColor: "#ffffff",
                    pointHoverBackgroundColor: "rgba(30, 136, 229, 0.87)",
                    pointHoverBorderColor: "#ffffff"
                },
                {
                    backgroundColor: "#3949ab",
                    borderColor: "#3949ab",
                    pointBackgroundColor: "#3949ab",
                    pointBorderColor: "#ffffff",
                    pointHoverBackgroundColor: "#3949ab",
                    pointHoverBorderColor: "#ffffff"
                }]
        };

        this.widgetIncomeOutcomeChartType = {
            chartType: "line"
        };

        this.widgetIncomeOutcomeChartOptions = {
            elements: {
                point: {
                    borderWidth: 2,
                    hoverBorderWidth: 2,
                    hoverRadius: 4,
                    radius: 4
                }
            },
            layout: {
                padding: {
                    left: 24,
                    right: 32
                }
            },
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: "rgba(0,0,0,0.54)"
                        }
                    }],
                yAxes: [{
                    gridLines: { tickMarkLength: 16 },
                    ticks: { stepSize: 1000 }
                }],
                spanGaps: false,
                tooltips: { position: "nearest", mode: "index", intersect: false }
            }
        };
    };
}

export class FilesDataSource { }

