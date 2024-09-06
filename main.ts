#! /usr/bin/env node
import inquirer from 'inquirer';

type Question = {
    question: string;
    options: string[];
    answer: number; // Index of the correct option
};

class Quiz {
    private questions: Question[];
    private score: number;


    constructor(questions: Question[]) {
        this.questions = questions;
        this.score = 0;
    }

    private async askQuestion(question: Question): Promise<void> {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question.question,
                choices: question.options,
            },
        ]);

        const userAnswerIndex = question.options.indexOf(answer.userAnswer);

        if (userAnswerIndex === question.answer) {
            console.log('Correct!\n');
            this.score++;
        } else {
            console.log(`Wrong! The correct answer was: ${question.options[question.answer]}\n`);
        }
    }

    private showResult(): void {
        console.log(`Quiz completed! Your score is: ${this.score}/${this.questions.length}`);
    }

    public async start(): Promise<void> {
        for (const question of this.questions) {
            await this.askQuestion(question);
        }
        this.showResult();
    }
}

// TypeScript-related questions
const questions: Question[] = [
    {
        question: 'Which of the following is a correct way to define a variable in TypeScript?',
        options: ['let myVar: string;', 'var myVar: string', 'myVar: string', 'const myVar'],
        answer: 0,
    },
    {
        question: 'What is the default access modifier for class members in TypeScript?',
        options: ['public', 'private', 'protected', 'readonly'],
        answer: 0,
    },
    {
        question: 'Which command compiles TypeScript code to JavaScript?',
        options: ['tsc', 'npm start', 'node', 'webpack'],
        answer: 0,
    },
    {
        question: 'Which of these is not a TypeScript data type?',
        options: ['string', 'boolean', 'number', 'bit'],
        answer: 3,
    },
    {
        question: 'How do you define an interface in TypeScript?',
        options: ['interface MyInterface {}', 'class MyInterface {}', 'type MyInterface = {}', 'struct MyInterface {}'],
        answer: 0,
    },
    {
            question: 'What does the "!" symbol mean in TypeScript?',
            options: [
                'Negation operator',
                'Non-null assertion operator',
                'Bitwise NOT operator',
                'Type assertion'
            ],
            answer: 1,
        },
        {
            question: 'Which of the following is true about "enum" in TypeScript?',
            options: [
                'Enums can have string values',
                'Enums cannot have numeric values',
                'Enums are only used for constants',
                'Enums cannot be iterated over'
            ],
            answer: 0,
        },
        {
            question: 'Which of the following utility types constructs a type with all properties of Type `T` set to optional?',
            options: [
                'Partial<T>',
                'Readonly<T>',
                'Pick<T, K>',
                'Record<K, T>'
            ],
            answer: 0,
        },
        {
            question: 'What does the "unknown" type represent in TypeScript?',
            options: [
                'A type-safe counterpart of "any"',
                'A type that cannot be assigned to any other type',
                'A type for values that are known at runtime',
                'A type for objects with no prototype'
            ],
            answer: 0,
        },
        {
            question: 'How can you define a tuple type in TypeScript?',
            options: [
                'let tuple: [number, string];',
                'let tuple: Array<number, string>;',
                'let tuple: (number, string);',
                'let tuple: Tuple<number, string>;'
            ],
            answer: 0,
        },
    
    

    



];

const quiz = new Quiz(questions);
quiz.start();
