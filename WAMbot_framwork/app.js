const { BotFrameworkAdapter, MemoryStorage, ConversationState, TurnContext } = require('botbuilder');
const {
    DialogSet,
    TextPrompt,
    ChoicePrompt,
    ConfirmPrompt,
    DatetimePrompt,
    FoundChoice,
    FoundDatetime,
    ListStyle
} = require('botbuilder-dialogs');
const dialogs = new DialogSet();
const { LuisRecognizer } = require('botbuilder-ai');
const restify = require('restify');

// Create server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

// Create adapter
const adapter = new BotFrameworkAdapter({ 
    appId: process.env.MICROSOFT_APP_ID, 
    appPassword: process.env.MICROSOFT_APP_PASSWORD 
});

// Create LuisRecognizers
const luisRecognizer = new LuisRecognizer({
     appId: '218a6ea9-16d2-4acc-a535-8eaee6b2f808',
    subscriptionKey: 'aa675c8c2a4d457fae4b29a2ead1f552',
    serviceEndpoint: 'https://westus.api.cognitive.microsoft.com',
    
});


//Require the Neo4J module
var neo4j = require('node-neo4j');
 
//Create a db object. We will using this object to work on the Neo4j DB.
db = new neo4j('http://neo4j:qwert12345@localhost:7474');
 

// Helper function for finding a specified entity
// entityResults are the results from LuisRecognizer.get(context)
function findEntities(entityName, entityResults) {
    let entities = []
    if (entityName in entityResults) {
        entityResults[entityName].forEach(entity => {
            entities.push(entity);
        });
    }
    return entities.length > 0 ? entities : undefined;
}


// Add conversation state middleware
const conversationState = new ConversationState(new MemoryStorage());
adapter.use(conversationState);
adapter.use(luisRecognizer);
          
                
// Listen for incoming activity 
// 定义所有intents
server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        if (context.activity.type === 'message') {
            const state = conversationState.get(context);
            const dc = dialogs.createContext(context, state);

            // Retrieve the LUIS results from our LUIS application
            const luisResults = luisRecognizer.get(context);

            // Extract the top intent from LUIS and use it to select which dialog to start
            // "NotFound" is the intent name for when no top intent can be found.
            const topIntent = LuisRecognizer.topIntent(luisResults, "NotFound");

            const isMessage = context.activity.type === 'message';
            
            if (isMessage) {
                switch (topIntent) {
                    case 'None':
                        //Add app logic when there is no result
                        await dc.begin("None", luisResults);
                        break;
                    case 'Greeting':

                        await dc.begin("Greeting", luisResults);
                        break;
                    case 'Abbreviation':

                        await dc.begin("Abbreviation", luisResults);
                        break;
                    case 'Administrators':

                        await dc.begin("Administrators", luisResults);
                        break;
                    case 'Audit_conclusion_output':

                        await dc.begin("Audit_conclusion_output", luisResults);
                        break;
                    case 'Audit_execution_output':

                        await dc.begin("Audit_execution_output", luisResults);
                        break;
                    case 'Audit_interim_output':

                        await dc.begin("Audit_interim_output", luisResults);
                        break;
                    case 'Audit_planning_output':

                        await dc.begin("Audit_planning_output", luisResults);
                        break;
                    case 'CAS_cashandbrokers':

                        await dc.begin("CAS_cashandbrokers", luisResults);
                        break;
                    case 'CAS_dividends_interest':

                        await dc.begin("CAS_dividends_interest", luisResults);
                        break;
                    case 'CAS_expense':

                        await dc.begin("CAS_expense", luisResults);
                        break;
                    case 'Weather':

                        await dc.begin("Weather", luisResults);
                        break;                        
                    case 'CAS_FSCP':

                        await dc.begin("CAS_FSCP", luisResults);
                        break;
                    case 'CAS_income':

                        await dc.begin("CAS_income", luisResults);
                        break;
                    case 'CAS_investments':

                        await dc.begin("CAS_investments", luisResults);
                        break;
                    case 'CAS_NAV_Based_fees':

                        await dc.begin("CAS_NAV_Based_fees", luisResults);
                        break;                        
                    case 'CAS_Payables':

                        await dc.begin("CAS_Payables", luisResults);
                        break;
                    case 'CAS_realised_gains_losses':

                        await dc.begin("CAS_realised_gains_losses", luisResults);
                        break;
                    case 'CAS_receivables':

                        await dc.begin("CAS_receivables", luisResults);
                        break;
                    case 'CAS_share_capital':

                        await dc.begin("CAS_share_capital", luisResults);
                        break;                        
                    case 'CAS_unrealised_gains_losses':

                        await dc.begin("CAS_unrealised_gains_losses", luisResults);
                        break;                          
                    case 'EYHelix':

                        await dc.begin("EYHelix", luisResults);
                        break;                          
                    case 'For_me':

                        await dc.begin("For_me", luisResults);
                        break;                          
                    case 'fundstype':

                        await dc.begin("fundstype", luisResults);
                        break;                          
                    case 'FurtherQuestions':

                        await dc.begin("FurtherQuestions", luisResults);
                        break;                          
                    case 'Intro':

                        await dc.begin("Intro", luisResults);
                        break;                          
                    case 'Process_cashandbroker':

                        await dc.begin("Process_cashandbroker", luisResults);
                        break;                          
                    case 'Process_conclusion':

                        await dc.begin("Process_conclusion", luisResults);
                        break;                          
                    case 'Process_dividend_interest':

                        await dc.begin("Process_dividend_interest", luisResults);
                        break;                          
                    case 'Process_execution':

                        await dc.begin("Process_execution", luisResults);
                        break;                          
                    case 'process_expense':

                        await dc.begin("process_expense", luisResults);
                        break;                          
                    case 'Process_FSCP':

                        await dc.begin("Process_FSCP", luisResults);
                        break;                          
                    case 'Process_income':

                        await dc.begin("Process_income", luisResults);
                        break;                          
                    case 'Process_interim':

                        await dc.begin("Process_interim", luisResults);
                        break;                          
                    case 'Process_investments':

                        await dc.begin("Process_investments", luisResults);
                        break;                          
                    case 'Process_NAV_based_fees':

                        await dc.begin("Process_NAV_based_fees", luisResults);
                        break;                          
                    case 'Process_Payables':

                        await dc.begin("Process_Payables", luisResults);
                        break;                          
                    case 'process_planning':

                        await dc.begin("process_planning", luisResults);
                        break;                          
                    case 'Process_realized_gains_and_losses':

                        await dc.begin("Process_realized_gains_and_losses", luisResults);
                        break;                          
                    case 'Process_receivables':

                        await dc.begin("Process_receivables", luisResults);
                        break;                          
                    case 'Process_share_capital':

                        await dc.begin("Process_share_capital", luisResults);
                        break;                          
                    case 'Process_unrealized_gains_and_losses':

                        await dc.begin("Process_unrealized_gains_and_losses", luisResults);
                        break;                          
                    case 'training':

                        await dc.begin("training", luisResults);
                        break;           
                    case 'WAMapp_for_EY':

                        await dc.begin("WAMapp_for_EY", luisResults);
                        break;                          
                    case 'Whatnext':

                        await dc.begin("Whatnext", luisResults);
                        break;                                                
                    case 'answer_efficient':

                        await dc.begin("answer_efficient", luisResults);
                        break;  
                    case 'ask_more_question':

                        await dc.begin("ask_more_question", luisResults);
                        break;  
                        
                    default:
                        // Add app logic for the recognition results.
                        await context.sendActivity(`Received this intent: ${topIntent}`);
                        break;
                }
            }
            
            if (!context.responded) {
                await dc.continue();
                if (!context.responded && isMessage) {
                    await dc.context.sendActivity(`Hi! I'm the LUIS dialog bot. Say something and LUIS will decide how the message should be routed.`);
                }
            }
        }
    });
});
      

// register some dialogs for usage with the intents detected by the LUIS app
// 这是完成对话的地方
dialogs.add('None', [
    async (dc) => {
        
        await dc.context.sendActivity("Sorry, I didn't get you. Can you ask again?");
        
        await dc.end();
    }
]);

//-----------------------------------------------
// TO DO Wait for debug
//-----------------------------------------------

dialogs.add('Greeting', [
    async function (dc){
        await dc.context.sendActivity('Hi! WAMbot is here for help.');
        await dc.context.sendActivity('You can ask me any questions about the WAMapp and Auditing rules :)');
 
        await dc.end();
    }
]);

//-----------------------------------------------
// Intents: Abbreviation
//-----------------------------------------------
dialogs.add('Abbreviation', [
    async (dc) => {
        await dc.context.sendActivity(`1.	WAMapps stands for “Wealth and Asset Management applications.” It will encompass a suite of client tools including those for audit, tax and regulatory functions.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Administrators
//-----------------------------------------------
dialogs.add('Administrators', [
    async (dc) => {
        await dc.context.sendActivity(`The following administrators have already been on-boarded to the platform: IFS, State Street, Citco (Aexeo), HedgeServ, BNY (Advent Geneva) and BNY (InvestOne).`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);



//-----------------------------------------------
// Intents: Audit_conclusion_output
//-----------------------------------------------
dialogs.add('Audit_conclusion_output', [
    async (dc) => {
        await dc.context.sendActivity(`You reached the "Audit_conclusion_output" dialog.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);

//-----------------------------------------------
// Intents: Audit_execution_output
//-----------------------------------------------
dialogs.add('Audit_execution_output', [
    async (dc) => {
        await dc.context.sendActivity(`Outputs produced by WAMapps that will assist at the execution phase of an audit are as follows: Year end Leads Sheets – with materiality populated and key items identified Year end NAV Based Fee Calculators Year end Allocation Testing Year End Realised Gain and Loss testing Year End Dividend income/expense testing Year End Interest income/expense testing Book Cost Reconciliation Investment Restrictions Review Cash leads and cash cut-off testing (pre-year end) Investment leads and stratification workbooks Year-End Analytical reviews Assistance with Financial Statement review – SOI workbooks and ASC 740 analysis.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Audit_interim_output
//-----------------------------------------------
dialogs.add('Audit_interim_output', [
    async (dc) => {
        await dc.context.sendActivity(`Outputs produced by WAMapps that may assist at Interim include: Interim Leads Sheets – with materiality populated and key items identified Interim NAV Based Fee Calculators Interim Allocation Testing Interim Realised Gain and Loss testing Interim Dividend income/expense testing Interim Interest income/expense testing.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Audit_planning_output
//-----------------------------------------------
dialogs.add('Audit_planning_output', [
    async (dc) => {
        await dc.context.sendActivity(`You reached the "Audit_planning_output" dialog.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);

//-----------------------------------------------
// Intents: CAS_cashandbrokers
//-----------------------------------------------
dialogs.add('CAS_cashandbrokers', [
    async (dc) => {
        await dc.context.sendActivity(`Cash and Broker Reconciliations Counterparty contact details and independent third party cash confirmations (GDS coordination) Support and explanations for material breaks identified (if any). Breakdown and support for post year-end support cash cut-off.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_dividends_interest
//-----------------------------------------------
dialogs.add('CAS_dividends_interest', [
    async (dc) => {
        await dc.context.sendActivity(`1.	Dividend/Interest income & expense \n 2.	Bank statements to show dividend and interest payments.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_expense
//-----------------------------------------------
dialogs.add('CAS_expense', [
    async (dc) => {
        await dc.context.sendActivity(`1)	Legal expenses sub-ledger and invoices \n 2)	Sub-ledgers for other material non-standard accounts and supporting documents for selected sample.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_FSCP
//-----------------------------------------------
dialogs.add('CAS_FSCP', [
    async (dc) => {
        await dc.context.sendActivity(`1)	All financial statement adjustments will need to be discussed with the financial reporting team 2)	Obtain support for material adjustments 3)	Request the client workings netting agreements for the offsetting note Workings and additional support when required for the related parties and post balance sheet events disclosures.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_income
//-----------------------------------------------
dialogs.add('CAS_income', [
    async (dc) => {
        await dc.context.sendActivity(`CAS items for PSP income are; Sub-ledgers for other material non-standard accounts Supporting documents for other income selected sample.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_investments
//-----------------------------------------------
dialogs.add('CAS_investments', [
    async (dc) => {
        await dc.context.sendActivity(`Investments Accounts CAS items include; Investments Counterparty contact details and independent third party confirmations (GDS coordination) Support and explanations for material reconciling breaks identified Board meeting minutes Breaches and Error Log Support manager priced positions and OTC contracts.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_NAV_Based_fees
//-----------------------------------------------
dialogs.add('CAS_NAV_Based_fees', [
    async (dc) => {
        await dc.context.sendActivity(`Updated prospectus and agreements.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_Payables
//-----------------------------------------------
dialogs.add('CAS_Payables', [
    async (dc) => {
        await dc.context.sendActivity(`CAS items for Payables PSP are; Dividend/Interest expense accrued Sub-ledgers for unsettled trades, unsettled capital transactions and other material non-standard accounts Bank statements to show subsequent payments of unsettled trades and unsettled capital transactions Cash ledger subsequent to the yearend for unrecorded liabilities test.`);
        
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_realised_gains_losses
//-----------------------------------------------
dialogs.add('CAS_realised_gains_losses', [
    async (dc) => {
        await dc.context.sendActivity(`Realised gain/loss Broker statements showing the sample selected.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_receivables
//-----------------------------------------------
dialogs.add('CAS_receivables', [
    async (dc) => {
        await dc.context.sendActivity(`Receivables PSP items include; Dividend/Interest income accrued Sub-ledgers for unsettled trades, unsettled capital transactions and other material non-standard accounts Bank statements to show subsequent receipts of unsettled trades and unsettled capital transactions.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_share_capital
//-----------------------------------------------
dialogs.add('CAS_share_capital', [
    async (dc) => {
        await dc.context.sendActivity(`Share Capital Transfer Agent contact details Board meeting minutes Bank statement and investor notices support for the subscription and redemptions sample selected.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: CAS_unrealised_gains_losses
//-----------------------------------------------
dialogs.add('CAS_unrealised_gains_losses', [
    async (dc) => {
        await dc.context.sendActivity(`The answer should be updated soon.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: client
//-----------------------------------------------
dialogs.add('client', [
    async (dc) => {
        await dc.context.sendActivity(`Clients do not use or interact with WAMapps directly. WAMapps is a managed service that will be used by our client-facing teams. However, the WAMapps visualizations and insights will be shared with clients as a part of our technology-enabled audit.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: current_functionality
//-----------------------------------------------
dialogs.add('current_functionality', [
    async (dc) => {
        await dc.context.sendActivity(`Wamapps currently has the following functionalities; Lead sheets, FS rec, Portfolio, SOI Rec, Book cost rec, Analytical Reviews, NAV based fees calculator, Share Capital Rec, Cash cut off testing, NAV Evolutions, Financial Highlights, Portfolio strat and Sampling, ASC 740 Analysis, External Evaluations, Rebates Calculation, Exception Reporting, Price Ratio Graphs /Yield. The External Evaluations, Rebates Calculation, Exception Reporting, Price Ratio Graphs /Yield functions are connected functions.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: EYHelix
//-----------------------------------------------
dialogs.add('EYHelix', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps is not currently part of EYHelix. WAMapps is bespoke for fund audits.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: For_me
//-----------------------------------------------
dialogs.add('For_me', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps presents a significant professional development opportunity for our people. The tool eliminates the rote activities of audit and allows our people to focus on risk and providing insight to our clients. By spending more time analyzing the data and focusing on the key risks, our people will have the opportunity to develop as strategic business advisors.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: fundstype
//-----------------------------------------------
dialogs.add('fundstype', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps has processed more than 4,500 funds across Ireland and the UK, US and BBC regions. The data platform can support a variety of funds, including hedge funds and regulated/mutual funds.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: FurtherQuestions
//-----------------------------------------------
dialogs.add('FurtherQuestions', [
    async (dc) => {
        await dc.context.sendActivity(`Send your questions to info.wammaps@ie.ey.com or contact a member of the WAMapps team directly`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Intro
//-----------------------------------------------
dialogs.add('Intro', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps is a technology platform that streamlines data capture, fosters greater collaboration and connection among our audit teams, our clients and their administrators. It creates a more interactive and responsive audit that allows us to be more forward-looking and improves the traditional information-sharing process. The way we now capture and analyze data gives us a deeper understanding of key risk areas and allows for a consistent focus on business issues. Using WAMapps, we can have more meaningful conversations with our fund clients and provide deeper and more insightful analysis.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Mechanism
//-----------------------------------------------
dialogs.add('Mechanism', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps was purpose-built by EY to capture data directly from our clients’ administrators. The data capture process is simplified and globally consistent, enabling production of audit-ready workpapers. The platform uses tools such as EY ISP to automate the valuation process and provide visualizations that can be used to deliver insights beyond the typical audit to boards and client executives. Watch this one-minute video explainer on how the platform works. `);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_cashandbroker
//-----------------------------------------------
dialogs.add('Process_cashandbroker', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps enables the following cash and Broker PSP process; 1.	Cash Lead is prepared and referenced to the TB 2.	Cash Workbook output which includes a breakdown of all individual cash balances by broker and by currency is produced and tied to your lead 3.	Cash confirmations will still need to be prepared and circularised and compared to the clients year-end balances 4.	Cash reconciliations will need to be requested and tied to the cash workbook and teams required to test and understand the reasons for selected break items 5.	WAMapps prepares a pre-filtered cash work-sheet that allows search for and test unusual cash activity up to ten days before year-end. 6.	FX rates are independently checked against EY-ISP`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_conclusion
//-----------------------------------------------
dialogs.add('Process_conclusion', [
    async (dc) => {
        await dc.context.sendActivity(`You reached the "Process_conclusion" dialog.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_dividend_interest
//-----------------------------------------------
dialogs.add('Process_dividend_interest', [
    async (dc) => {
        await dc.context.sendActivity(`Through WAMapps, the dividend/interest income and expense psp process becomes; 1. Dividend and Interest workbook is prepared 2.	Dividend and Interest workbook is agreed back to your leads 3.	Determine if your taking an analytical or substantive testing approach 4. Analytical procedures for dividend/ interest will need to be completed by the audit team 5. Within the dividend/interest workbooks a sample population is selected. Coupon and dividend rates are agreed to EY-ISP. The payment date is also verified to EY- ISP 6.	Sample to test will be selected within your dividend and interest workbooks. Bank statements for the sample selected will from the client and agreed by the audit team.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_execution
//-----------------------------------------------
dialogs.add('Process_execution', [
    async (dc) => {
        await dc.context.sendActivity(`You reached the "Process_execution" dialog.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: process_expense
//-----------------------------------------------
dialogs.add('process_expense', [
    async (dc) => {
        await dc.context.sendActivity(`WAM apps enabled: 1.	Expenses Lead is prepared and referenced to the TB with key items automatically identified 2.	Dividend and interest income are already discussed above. 3.	Sub-Ledgers for material non-standard accounts may be requested with items selected for testing upon review 4.	Audit team will need to obtain details of selected sample.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_FSCP
//-----------------------------------------------
dialogs.add('Process_FSCP', [
    async (dc) => {
        await dc.context.sendActivity(`Please see below for the WAMapp enables FSCP process; 1.	WAMapps complete a reconciliation lead for the SOFP and SOCI. Reconciliation of the SOCNA will be completed by the audit team 2.	Within the SOFP and SOCI lead sheets all financial statement adjustments are identified. The audit team will need to reach out to the financial reporting team with a list of the adjustments identified and obtain an understanding of each transaction and when required additional support. 3.	The cash flow statement will be recalculated by the WAMapps team 4. The WAMapps team produce a levelling and risk note workbook. The audit team will to complete the VaR and sensitivity analysis review The offsetting and related parties note will also reviewed by the audit team Post balance sheet note will be reviewed by the audit team WAMapps creates a workbook for the financial highlights and Schedule of Investments 5.	The audit team will still need to prepare the disclosure checklists and review the note disclosures to ensure they are in line with applicable accounting standards. You will also need complete clerical accuracy checks and take note of numbers that change between drafts. It will be up you to update the workings provided by the WAMapps team on a draft by draft basis if changes occur.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_income
//-----------------------------------------------
dialogs.add('Process_income', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps enables income Psp process is as follows; 1.	Income Lead is prepared and referenced to the TB with key items automatically identified 2.	Dividend and interest income are already discussed above. 3.	Sub-Ledgers for material non-standard accounts may be requested with items selected for testing upon review.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_interim
//-----------------------------------------------
dialogs.add('Process_interim', [
    async (dc) => {
        await dc.context.sendActivity(`Answer is needed to update.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_investments
//-----------------------------------------------
dialogs.add('Process_investments', [
    async (dc) => {
        await dc.context.sendActivity(`Answer is needed to update.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_NAV_based_fees
//-----------------------------------------------
dialogs.add('Process_NAV_based_fees', [
    async (dc) => {
        await dc.context.sendActivity(`Answer is needed to update.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_Payables
//-----------------------------------------------
dialogs.add('Process_Payables', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps enabled payables process is as follows; 1.	Payable Lead is prepared and referenced to the TB with key items automatically identified 2.	Sub-Ledgers for material non-standard accounts may be requested with items selected for testing upon review 3.	Dividend and Interest workbook is prepared 4.	Dividend and Interest workbook is agreed back to your leads 5.	Within the dividend/interest workbooks a sample population is selected. Coupon and dividend rates are agreed to EY-ISP. Dividend and interest is payable is recalculated. 6.	Audit team will need to obtain list of unsettled trades and unsettled capital transactions and test the sample. Audit team will need to agree the unsettled trades to broker reconciliations. 7.	Admin and management fees is recalculated. Audit will be required to obtain the agreements and input the rate for NAV based fee calculation and agree the unpaid amount to payable lead. 8. Audit team will be required to recalculate Performance based fee and agree the unpaid amount to payable lead. 9.	Audit team will be required to search for unrecorded liabilities.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: process_planning
//-----------------------------------------------
dialogs.add('process_planning', [
    async (dc) => {
        await dc.context.sendActivity(`With the use of WAMapps, audit teams are still required to complete the following items for the planning stage of an audit; Assess and identify key areas of risks. Agree and obtain a signed Letter of Engagement Complete independence/ procedures Hold a team planning and estimates event Establish a budget and team structure after taking into account the functionality provided by WAMapps. Hold discussions with your clients about key changes which have occurred during the year Review all board minutes and resolutions Document our understanding of the clients business Determine the nature, timing and extent of audit procedures. In particular, consider what areas can be brought forward for interim testing. Prepare your ASM Complete the planning elements for the following PGAP’s: Going Concern. `);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_realized_gains_and_losses
//-----------------------------------------------
dialogs.add('Process_realized_gains_and_losses', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps enables gains and Losses PSP process looks like; 1.	Realised gain/loss Lead is prepared and referenced to the TB with key items automatically identified 2.	Realised gain/loss workbook is prepared 3.	Realised gain/loss workbook is agreed back to your leads 4.	Within the Realised gain/loss workbook a sample population is selected, and realised gain/loss is recalculated. 5.	Broker statements for the sample selected will need to be requested from the client and agreed by the audit team. 6.	Book cost reconciliation is prepared and agreed back to the leads.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_receivables
//-----------------------------------------------
dialogs.add('Process_receivables', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapp enables receivables process entails; 1.	Receivables Lead is prepared and referenced to the TB with key items automatically identified 2.	Sub-Ledgers for material non-standard accounts may be requested with items selected for testing upon review 3.	Dividend and Interest workbook is prepared 4.	Dividend and Interest workbook is agreed back to your leads 5.	Within the dividend/interest workbooks a sample population is selected. Coupon and dividend rates are agreed to EY-ISP. Dividend and interest is receivable is recalculated. 6.	Audit team will need to obtain list of unsettled trades and unsettled capital transactions and test the sample 7.	Audit team will need to agree the unsettled trades to broker reconciliations.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_share_capital
//-----------------------------------------------
dialogs.add('Process_share_capital', [
    async (dc) => {
        await dc.context.sendActivity(`Wamapps enabled share capital PSP process; 1.	Share capital lead will be obtained from your TBA and populated. 2.	Share register will be agreed to your share capital lead 3.	Send and obtain TA confirmation from the Transfer Agent. Once the TA confirmation is received you will need to agree it back to the share capital lead. 4.	Agree your share capital lead back to your financial statement note disclosure. 5.	NAV Evolution workbook is prepared. Commentary will need to be included on the on the correlation of the share classes 6.	An allocation of gains and losses workbook will be prepared by the WAMapps team 7.	Review of board meeting minutes 8.	Test for minimum subscriptions 9.	Send a sample of subs and reds to your TPA and obtain and agree them to bank statements and investor notices.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Process_unrealized_gains_and_losses
//-----------------------------------------------
dialogs.add('Process_unrealized_gains_and_losses', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps enabled unrealised gains and losses are as follows; 1.	Payables Lead is prepared and referenced to the TB with key items automatically identified 2.	Unrealised gain/loss balance is reconciled to the movement in unrealised gain/loss per P&L.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: training
//-----------------------------------------------
dialogs.add('training', [
    async (dc) => {
        await dc.context.sendActivity(`Training modules are currently under development and will be available shortly.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: WAMapp_for_EY
//-----------------------------------------------
dialogs.add('WAMapp_for_EY', [
    async (dc) => {
        await dc.context.sendActivity(`Digital innovation and technology advancements are transforming today’s businesses. Our clients are demanding a more robust and forward-looking approach to the audit process. WAMapps positions EY as a digital leader in technology-enabled fund audits.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);


//-----------------------------------------------
// Intents: Whatnext
//-----------------------------------------------
dialogs.add('Whatnext', [
    async (dc) => {
        await dc.context.sendActivity(`WAMapps is designed to evolve. Future phases will include other elements of EY’s service model, including tax compliance, regulatory reporting and benchmarking.`);
        await dc.context.sendActivity(`Is it the right answer you are looking for?`);
   
        await dc.end();
    }
]);

//-----------------------------------------------
// Intents: answer_efficient
//-----------------------------------------------
dialogs.add('answer_efficient', [
    async (dc) => {
        await dc.context.sendActivity(`Glad to answer your question!`);
        await dc.context.sendActivity(`What else can I help you?`);
   
        await dc.end();
    }
]);

//-----------------------------------------------
// Intents: ask_more_question
//-----------------------------------------------
dialogs.add('ask_more_question', [
    async (dc) => {
        await dc.context.sendActivity(`Thank you for using WAMbot, have a good day!`);
   
        await dc.end();
    }
]);
