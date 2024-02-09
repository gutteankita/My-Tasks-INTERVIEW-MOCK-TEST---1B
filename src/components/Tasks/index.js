import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  TaskMainContainer,
  CreateTaskContainer,
  Heading,
  Ul,
  Li,
  Form,
  Label,
  Input,
  Select,
  Option,
  Button,
  DisplayContainer,
  TaskOrder,
  TasksList,
  TagHeading,
  ButtonTags,
  TagBtn,
  InputTextpara,
  Para,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CharacterCount extends Component {
  state = {
    inputText: '',
    inputTextList: [],
    selectedTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  //   componentDidMount() {
  //   this.setState({ selectedTag: tagsList[0].optionId });
  // }

  onChangeInput = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onSelectedTag = event => {
    this.setState({
      selectedTag: event.target.value,
    })
    console.log(event.target.value)
  }

  handleSubmitBtn = event => {
    event.preventDefault()
    const uuid = uuidv4()
    const {inputText, selectedTag} = this.state
    this.setState(prevState => ({
      inputTextList: [
        ...prevState.inputTextList,
        {id: uuid, task: inputText, tag: selectedTag},
      ],
      inputText: '',
      selectedTag: '',
    }))
  }
  // text,selectedTag
  // onClickActiveTag = optionId => {
  //   this.setState({activeTag: optionId})
  // }
  onClickActiveTag = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? 'INITIAL' : optionId,
    }))
  }

  render() {
    const {inputTextList, inputText, activeTag, selectedTag} = this.state
    console.log(selectedTag)
    return (
      <TaskMainContainer>
        <CreateTaskContainer>
          <Heading>Create a task!</Heading>
          <Form onSubmit={this.handleSubmitBtn}>
            <Label htmlFor="task">Task</Label>
            <Input
              id="task"
              type="text"
              value={inputText}
              onChange={this.onChangeInput}
              placeholder="Enter the task here"
            />
            <Label htmlFor="tag">Tags</Label>
            <Select
              htmlFor="tag"
              value={selectedTag}
              onChange={this.onSelectedTag}
            >
              {tagsList.map(each => (
                <Option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <Button type="submit">Add Task</Button>
          </Form>
        </CreateTaskContainer>
        <DisplayContainer>
          <TagHeading>Tags</TagHeading>
          <Ul>
            {tagsList.map(each => (
              <Li key={each.optionId}>
                <ButtonTags
                  onClick={() => this.onClickActiveTag(each.optionId)}
                  isActive={each.optionId === activeTag}
                >
                  {each.displayText}
                </ButtonTags>
              </Li>
            ))}
          </Ul>
          <TagHeading>Tasks</TagHeading>
          {inputTextList.length === 0 ? (
            <Para>No Tasks Added Yet</Para>
          ) : (
            <TaskOrder>
              {inputTextList
                .filter(
                  each => each.tag === activeTag || activeTag === 'INITIAL',
                )
                .map(each => (
                  <TasksList key={task.id}>
                    <InputTextpara>{each.task}</InputTextpara>
                    <TagBtn>{each.tag}</TagBtn>
                  </TasksList>
                ))}
            </TaskOrder>
          )}
        </DisplayContainer>
      </TaskMainContainer>
    )
  }
}

export default CharacterCount
