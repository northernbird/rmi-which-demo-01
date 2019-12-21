const finishTestQuestion = (state =true, action) => {
    // TODO Do we really need action type here ??
    switch (action.type) {
        case 'FINISH_TEST_QUESTION':
            return action.isSelected
        default:
            return state
    }
}
export default finishTestQuestion