export default class IncomeClass {
    static dates = [null, null];

    public static init = () => {
        this.dates = JSON.parse(localStorage.getItem('IncomeDateFilter')) || [null, null]
    }

    public static setDateFilter = (_dates: null[]) => {
        this.dates = _dates
        localStorage.setItem('IncomeDateFilter', JSON.stringify(_dates))
        return this.getDateFilter();
    }

    public static getDateFilter = () => {
        var res = 'весь период';
        this.dates.forEach((element, key) => {
            if(element != null){
                if(key == 1){
                    res += ' - ' + new Date(element).toLocaleDateString()
                } else {
                    res = new Date(element).toLocaleDateString()
                }
            }
        });
        return res;
    }
}