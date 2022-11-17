for (i = 0; i < 5; i++) {
    let y = "";
    for (j = 0; j < 10; j++) {
        if (j >= 5 - i && j <= 5 + i) {
            y += "👏";
        } else {
            y += " ";
        }
    }
    console.log(y);
}
