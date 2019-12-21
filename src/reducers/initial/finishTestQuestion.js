import { TestQuestionStatus } from '../../actions'

const finishTestQuestion = (state =true, action) => {
    switch (action.type) {
        case TestQuestionStatus.FINISH_TEST_QUESTION:
            return action.isSelected
        default:
            return state
    }
}
export default finishTestQuestion