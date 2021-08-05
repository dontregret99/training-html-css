let currentShow = 0;

function scrollReview(step) {
    const length = 3;

    let reviewArray = ['review-item-1', 'review-item-2', 'review-item-3'];
    let reviewDots = ['review-dots-1', 'review-dots-2', 'review-dots-3'];

    for(let i = 0; i < length; i++) {
        document.getElementById(reviewArray[i]).style.display = "none";

        document.getElementById(reviewDots[i]).style.width = "10px";
        document.getElementById(reviewDots[i]).style.height = "10px";
    }

    currentShow += step;
    currentShow = Math.abs(currentShow) % 3;

    document.getElementById(reviewArray[currentShow]).style.display = "block";
    document.getElementById(reviewDots[currentShow]).style.width = "15px";
    document.getElementById(reviewDots[currentShow]).style.height = "15px";
}