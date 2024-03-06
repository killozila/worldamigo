class PaymentForm {
    constructor() {
      this.paymentMethodSelect = document.querySelector('.payment-method-select');
      this.emailInput = document.querySelector('.email-input');
      this.cardTypeInput = document.querySelector('.card-type-input');
  
      this.paymentMethodSelect.addEventListener('change', () => this.showPaymentDetails());
      document.querySelector('.payment-form').addEventListener('submit', (event) => this.onSubmit(event));
    }
  
    showPaymentDetails() {
      const paymentMethod = this.paymentMethodSelect.value;
  
      if (paymentMethod === 'pix') {
        this.emailInput.style.display = 'block';
        this.cardTypeInput.style.display = 'none';
      } else if (paymentMethod === 'cartao') {
        this.emailInput.style.display = 'none';
        this.cardTypeInput.style.display = 'block';
      } else {
        this.emailInput.style.display = 'none';
        this.cardTypeInput.style.display = 'none';
      }
    }
  
    onSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
    }
  }
  
  new PaymentForm();