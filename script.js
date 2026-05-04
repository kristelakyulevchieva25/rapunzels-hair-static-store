const purchaseForm = document.getElementById("purchase-form");
const customerNameInput = document.getElementById("customer-name");

if (purchaseForm && customerNameInput) {
    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customerName = customerNameInput.value.trim();

        if (customerName === "") {
            alert("Please enter your name.");
            return;
        }

        alert(customerName + ", thank you for your order!");
        purchaseForm.reset();
    });
}

const reviewForm = document.getElementById("review-form");
const reviewText = document.getElementById("review-text");
const reviewsList = document.getElementById("reviews-list");

if (reviewForm && reviewText && reviewsList) {
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newReviewText = reviewText.value.trim();

        if (newReviewText !== "") {
            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.textContent = newReviewText;

            reviewsList.prepend(newReview);
            reviewForm.reset();
        }
    });
}