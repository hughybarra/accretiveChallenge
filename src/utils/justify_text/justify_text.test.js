// const justify_text = require('./justify_text');
import justify_text from './';

describe('Justify Text Method Unit Tests',()=>{
    it('should run without exploding', () =>{
        const test_string = 'some test string';
        expect(justify_text(test_string, 25).length).toBe(25)
    });
    it('should not run if missing inputs', () =>{
        expect(justify_text()).toBe(false);
        expect(justify_text('asdf asdf asdf')).toBe(false);
        expect(justify_text({}, {})).toStrictEqual({});
        expect(justify_text(123, {})).toBe(123);
        expect(justify_text('asdfasdf', {})).toBe('asdfasdf');
    });
    it('Should never justify the last word int he string', () =>{
        const test_string = 'some test BINGO';
        let just_string = justify_text(test_string, 30);
        let str_array = just_string.split(' ');
        expect (str_array[str_array.length-1]).toEqual('BINGO');
        const test_string_2 = 'blibbady blobbady bloobady BINGO'
        just_string = justify_text(test_string_2, 400);
        str_array = just_string.split(' ');
        expect(str_array[str_array.length-1]).toEqual('BINGO');
    });
    it('should not run if string is empty', () =>{
        expect(justify_text('', 23)).toBe(false);
    })
    it('Should return default string if len < provided string', () =>{
        const test_string = 'some test string';
        expect(justify_text(test_string, 2)).toBe(test_string)
    });
    it('should return default string if provided string is not a string', () =>{
        const test_string = {"jimmy": "johns"};
        expect(justify_text(test_string, 100)).toBe(test_string);
        const test_string1 = 123;
        expect(justify_text(test_string1, 100)).toBe(test_string1)
        const test_string2 = [1, 2, 3, 4, 5];
        expect(justify_text(test_string2, 100)).toBe(test_string2)
        const test_string3 = false;
        expect(justify_text(test_string3, 100)).toBe(test_string3)
    });
    it('should clean incorrectly formatted strings',()=>{
        const test_1 = '         some string here';
        let result_1 = justify_text(test_1, 25);
        expect(result_1).toBe('some      string     here');
        let test_2 = 'some         string here';
        let result_2 = justify_text(test_2, 25);
        expect(result_2).toBe('some      string     here')
        let test_3 = 'some string here      ';
        let result_3 = justify_text(test_3, 25);
        expect(result_3).toBe('some      string     here');
    });
    it('should have a specific number of spaces', () =>{
        const test_1 = 'some string here kjdkfd';
        const len = 500;
        let result_1 = justify_text(test_1, len);
        let str_array = result_1.split(' ');
        let count = 0;
        for(let i = 0; i < str_array.length; i ++){
            if(str_array[i] === ''){
                count++;
            }
        }
        let clean_str = test_1.replace(/\s+/g,' ').trim();
        let str_diff =  len - clean_str.length;
        expect(count).toBe(str_diff);
        const test_2 = 'some filthy hobbits stole my ring Golum!';
        const len_2 = 2300;
        let result_2 = justify_text(test_2, len_2);
        str_array = result_1.split(' ');
        count = 0;
        for(let i = 0; i < str_array.length; i ++){
            if(str_array[i] === ''){
                count ++
            }
        }
        clean_str = test_1.replace(/\s+/g, ' ').trim();
        str_diff = len-clean_str.length;
        expect(count).toBe(str_diff);
    });
})
