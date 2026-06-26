class Solution {
 public static boolean isValid(String s) {
        if(s.length()%2 != 0) return false;
        Stack zezo=new Stack();
        char[] str=s.toCharArray();
        for(int i=0;i<s.length();i++){
            if(str[i]=='['||str[i]=='{'||str[i]=='('){
                zezo.push(str[i]);
            }else{
                if(str[i]==')'&&!zezo.empty()&&zezo.peek().equals('(')){
                    zezo.pop();
                }else if(str[i]=='}'&&!zezo.empty()&&zezo.peek().equals('{')){
                    zezo.pop();
                }else if(str[i]==']'&&!zezo.empty()&&zezo.peek().equals('[')){
                    zezo.pop();
                }else{
                    return false;
                }
            }
        }
                if(!zezo.empty()) return false;

        return true;
    }
}
