import request from 'request';

class CFSProxy {
  constructor(endpoint) {
    const date = new Date();
    this.loanRaisingMonth = date.getMonth() + 1;
    this.loanRaisingYear = date.getFullYear();

    this.endpoint = endpoint;
  }

  static yearsToMonths(years) {
    return 12 * years;
  }

  constructQuery(amount, interestRate, payments) {
    return `${this.endpoint.uri}${this.endpoint.params.loanRaisingMonth}=${this.loanRaisingMonth}&${this.endpoint.params.loanRaisingYear}=${this.loanRaisingYear}&${this.endpoint.params.principalAmount}=${amount}&${this.endpoint.params.annualNominalInterestRate}=${interestRate}&${this.endpoint.params.totalNumberOfPayments}=${payments}`;
  }

  execute(amount, interestRate, payments, res) {
    const query = this.constructQuery(amount, interestRate, CFSProxy.yearsToMonths(payments));

    request(query, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const responseBody = JSON.parse(body);
        const monthlyPayment = responseBody.amortizationSchedule[0].payment.toFixed(2);
        res.send({ monthlyPayment });
      } else {
        res.status(400).send(body);
      }
    });
  }
}

export default CFSProxy;
