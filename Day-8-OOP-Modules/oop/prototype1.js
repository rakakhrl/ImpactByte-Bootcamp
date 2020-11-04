String.prototype.reverseString = () => {
    let splitString = this.split();
    let reverse = splitString.reverse();
    
    return reverse.join('')
}

console.log('RAKA'.reverseString());