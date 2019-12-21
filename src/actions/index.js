export const finishTestQuestion = (isSelected = false) => ({
    type: 'FINISH_TEST_QUESTION',
    isSelected
})


export const TestQuestionStatus = {
    FINISH_TEST_QUESTION: 'FINISH_TEST_QUESTION',
}