import { createGlobalStyle } from "styled-components";

const Components = createGlobalStyle`
    :root
    {
        --color-primary : #ff577f;
        --color-primary-focus : #FF427F;
        --color-primary-negative : #59323F;
        
        --gray-0 : #F8F9FA;
        --gray-1 : #868E96;
        --gray-2 : #343B41;
        --gray-3 : #212529;
        --gray-4 : #121214;

        --sucess : #3FE864;
        --error : #E83F5B;
        
    }
`
export default Components