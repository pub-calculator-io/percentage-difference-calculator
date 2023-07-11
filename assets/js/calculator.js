function calculate() {
    const v1 = input.get('v1').positive().val();
    const v2 = input.get('v2').positive().val();

    if (!input.valid()) return;

    const difference = Math.abs(v1 - v2);
    const difference_2 = Math.abs((v2 + v1) / 2);
    const percentageChange = roundTo((difference / difference_2) * 100);

    _('result').innerHTML = percentageChange + "% difference";
}
