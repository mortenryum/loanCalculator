import CFSProxy from './CFSProxy.js';

const endpoint = {
  uri: 'https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?',
  params: {
    loanRaisingMonth: 'loanRaisingMonth',
    loanRaisingYear: 'loanRaisingYear',
    principalAmount: 'principalAmount',
    annualNominalInterestRate: 'annualNominalInterestRate',
    totalNumberOfPayments: 'totalNumberOfPayments',
  },
};

const cfsProxy = new CFSProxy(endpoint);

export default (req, res, next) => {
  const amount = req.query.amount;
  const years = req.query.years;
  const interestRate = req.query.interestRate;

  if (amount && years && interestRate) {
    cfsProxy.execute(amount, interestRate, years, res);
  } else {
    res.status(400).send('Could not process API request because you did not provide the necessary parameters. Required parameters are amount, years and interestRate');
  }
};
