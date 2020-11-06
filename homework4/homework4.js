        //LV0（1）
        var str="hello world"
        console.log(str)
        //LV0（2）
        var arr=[1,5,6,7,"8",10]
        
        function getSum()
        {   
            var sum = arr.reduce((a,b) => a+Number(b))
            return sum
            }
        var SUM=getSum(arr)
        console.log(SUM)
        //LV1(1)
        var str = "can-enter-volunteer-organization"
        
        function change(str)
        {
            var cut=str.split("-")
        for(var i =1 ; i < cut.length ; i++){
            cut[i] = cut[i].slice(0,1).toUpperCase()+cut[i].slice(1)
        }
             
            str = cut.join('')
            return str
        }
            str = change(str)
        console.log(str)
        //LV1(2)
        var arr1 = ["myfirstactivity","today activity","yourActivity","activitys"]
        arr1.push("activity")
        console.log(arr1)
        //LV2(1)
        var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]
        function even(arr)
        {
            while(arr.some(b=> Array.isArray(b))) {
                arr = [].concat(...arr);
        
        }
        return arr;
        }
        arr=even(arr)
        console.log(arr)
        //LV2(2)
        var arr2 = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]
        
            var co = function(obj1, obj2) {
            var val1 = obj1.id;
            var val2 = obj2.id;
            if(val1 < val2) {
                return -1;
            } else if(val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        }
        arr2=arr2.sort(co)
        arr2=JSON.stringify(arr2)
        console.log(arr2)
        