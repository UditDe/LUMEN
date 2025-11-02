import type { question_type } from "../types/navbarOptions";

export const question_list: question_type[] = [
    {
        id: "01",
        qs_name: "Find The Number in a list",
        description: `
            ### **Find The Number in a List**

            #### **Problem Description**
            You are given a list of integers and a target number.  
            Your task is to determine whether the target number exists in the list.  
            If it exists, print **"Yes"**; otherwise, print **"No"**.

            #### **Input Format**
            - The first line contains an integer **N**, the number of elements in the list.  
            - The second line contains **N** space-separated integers.  
            - The third line contains an integer **X**, the target number to search for.

            #### **Output Format**
            - Print **"Yes"** if **X** is present in the list.  
            - Print **"No"** otherwise.

            #### **Constraints**
            - ( 1 ≤ N ≤ 10^5 )  
            - ( -10^9 ≤ A_i ≤ 10^9 )  
            - ( -10^9 ≤ X ≤ 10^9 )

            #### **Example**

            **Input**
            \`\`\`
            5
            1 3 7 9 5
            7
            \`\`\`

            **Output**
            \`\`\`
            Yes
            \`\`\`
        `,
        level: "easy",
    },
    {
        id: "02",
        qs_name: "Addition Of two numbers",
        description: `
            ### **Addition of Two Numbers**

            #### **Problem Description**
            You are given two integers.  
            Your task is to calculate and print their sum.

            #### **Input Format**
            - The first line contains an integer **A**.  
            - The second line contains an integer **B**.

            #### **Output Format**
            - Print a single integer — the sum of **A** and **B**.

            #### **Constraints**
            - ( -10^9 ≤ A, B ≤ 10^9 )

            #### **Example**

            **Input**
            \`\`\`
            5
            7
            \`\`\`

            **Output**
            \`\`\`
            12
            \`\`\`
        `,
        level: "easy",
    },
    {
        id: "03",
        qs_name: "FizzBuzz",
        description: `
            ### **FizzBuzz**

            #### **Problem Description**
            Given an integer **N**, print the numbers from **1** to **N**.  
            But for multiples of **3**, print **"Fizz"** instead of the number,  
            for multiples of **5**, print **"Buzz"**,  
            and for numbers which are multiples of both **3** and **5**, print **"FizzBuzz"**.

            #### **Input Format**
            - The first line contains an integer **N**.

            #### **Output Format**
            - Print the sequence from **1** to **N**, each on a new line, applying the FizzBuzz rules.

            #### **Constraints**
            - ( 1 ≤ N ≤ 10^5 )

            #### **Example**

            **Input**
            \`\`\`
            15
            \`\`\`

            **Output**
            \`\`\`
            1
            2
            Fizz
            4
            Buzz
            Fizz
            7
            8
            Fizz
            Buzz
            11
            Fizz
            13
            14
            FizzBuzz
            \`\`\`
        `,
        level: "easy",
    },
    {
        id: "04",
        qs_name: "Next Prime Number",
        description: `
            ### **Next Prime Number**

            #### **Problem Description**
            You are given an integer **N**.  
            Your task is to find and print the **smallest prime number** that is **strictly greater** than **N**.

            #### **Input Format**
            - The first line contains an integer **N**.

            #### **Output Format**
            - Print a single integer — the next prime number after **N**.

            #### **Constraints**
            - ( 1 ≤ N ≤ 10^6 )

            #### **Example**

            **Input**
            \`\`\`
            10
            \`\`\`

            **Output**
            \`\`\`
            11
            \`\`\`
        `,
        level: "easy",
    },
];
