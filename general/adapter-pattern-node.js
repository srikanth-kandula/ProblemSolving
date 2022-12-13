class ExternalPaymentServiceAdapter {
  constructor(externalPaymentService) {
    this.externalPaymentService = externalPaymentService;
    // Use console.log() for debugging
  }

  generateId() {
    let id = '';
    let num = Math.random() * 10;

    var characters = 'abcdefghijklmnopqrstuvwxxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charsLength = characters.length;
    for (var i = 0; i < num; i++) {
      id += characters.charAt(Math.floor(Math.random() * charsLength));
    }

    return id;
  }

  createCharge({ customerId, amount, currency }) {
    this.externalPaymentService.chargeCurrency = currency;
    let chargeId = this.externalPaymentService.createCharge(customerId, amount);
    return chargeId;
  }

  cancelCharge({ chargeId }) {
    let pendingCharges = this.externalPaymentService.pendingCharges;
    for (let pendingChrg of pendingCharges) {
      if (pendingChrg.chargeId === chargeId) {
        this.externalPaymentService.cancelCharge(chargeId);
      }
    }
  }

  updateCharge({ chargeId, amount, currency }) {
    let newId;
    let pendingCharges = this.externalPaymentService.pendingCharges;
    for (let pendingChrg of pendingCharges) {
      if (pendingChrg.chargeId === chargeId) {
        let custId = pendingChrg.customerId;
        this.externalPaymentService.cancelCharge(chargeId);
        this.externalPaymentService.chargeCurrency = currency;
        newId = this.externalPaymentService.createCharge(custId, amount)
      }
    }

    return newId;
  }

  listCharges() {
    let chargesList = [];
    let pendingCharges = this.externalPaymentService.pendingCharges;
    for (let pendingChrg of pendingCharges) {
      let value = pendingChrg['value'].split(" ");
      let amount = value[0];
      let currency = value[1];

      let charge = {
        chargeId: pendingChrg.chargeId,
        customerId: pendingChrg.customerId,
        amount: +amount,
        currency: currency
      }
      chargesList.push(charge)
    }

    return chargesList;
  }
}

module.exports = ExternalPaymentServiceAdapter;


let temps = new ExternalPaymentServiceAdapter();
temps.cancelCharge({ chargeId: 12345 })
