function IncredibleHash(){
    this.arr = [];
    this.length = 0;
    this.addToHash = function(key, value){
        this.arr.push(key);
        this.arr[key] = value;
        this.length = this.arr.length;
    };
    this.getFromHash = function(key){
        return this.arr[key]
    }
}

module.exports = IncredibleHash;