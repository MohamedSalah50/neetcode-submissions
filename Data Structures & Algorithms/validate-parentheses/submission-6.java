class Solution {
     public static boolean isValid(String s) {
        if(s.length()%2 != 0) return false;
        Stack stack=new Stack();
        char[] str=s.toCharArray();
        for(int i=0;i<s.length();i++){
            if(str[i]=='['||str[i]=='{'||str[i]=='('){
                stack.push(str[i]);
            }else{
                if(str[i]==')'&&!stack.empty()&&stack.peek().equals('(')){
                    stack.pop();
                }else if(str[i]=='}'&&!stack.empty()&&stack.peek().equals('{')){
                    stack.pop();
                }else if(str[i]==']'&&!stack.empty()&&stack.peek().equals('[')){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }
        if(!stack.empty()) return false;
        return true;
   }
    public static void main(String[] args) {
        String d = "({[]})" ;
        System.out.println(isValid(d));
    }
}
