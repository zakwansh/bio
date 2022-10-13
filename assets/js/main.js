window.onload = () => {
    new Date().getHours() <= 16 ? background.src = "../media/morning.gif" : background.src = "../media/afternoon.gif";
}