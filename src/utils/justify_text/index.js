export default function justify_text(justify_str, len) {
    if(!justify_str || !len || justify_str.len === 0 ){
        return false;
    }
    if(justify_str.length > len || typeof justify_str !== 'string' || typeof len !== 'number'){
        return justify_str;
    }

    let clean_str = justify_str.replace(/\s+/g,' ').trim();

    const str_diff = len - clean_str.length;

    let  words_array = clean_str.split(' ');

    let counter = 0;

    for( let i = 0; i < str_diff; i ++){
        if(counter < words_array.length -2){
            words_array[counter] += ' ';
            counter ++;
        }else{
            words_array[counter] += ' ';
            counter = 0;
        }
    }
    let justified_string = words_array.join(' ');
    return justified_string;
}
