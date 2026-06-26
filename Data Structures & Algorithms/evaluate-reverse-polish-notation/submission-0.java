class Solution {
    public static int evalRPN(String[] tokens) {
    int temp;
    Stack<Integer> stack = new Stack<Integer>();
    for(int i=0;i<=tokens.length-1;i++){
        if(tokens[i].equals( "+" )|| tokens[i].equals( "-") || tokens[i].equals( "/") || tokens[i].equals( "*")){
            switch(tokens[i]){
                case "+":
                    temp=stack.pop();
                    stack.push(temp+stack.pop());
                    break;
                case "-":
                    temp=stack.pop();
                    stack.push(stack.pop()-temp);
                    break;
                case "/":
                    temp=stack.pop();
                    stack.push(stack.pop()/temp);
                    break;
                case "*":
                    temp=stack.pop();
                    stack.push(temp*stack.pop());
                    break;
            }
        }else{
           int num=Integer.parseInt(tokens[i]);
           stack.push(num);
        }
    }
    return stack.peek();

}
}
