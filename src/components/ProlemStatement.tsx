import { problem_one } from "../Constants/problems";
import "./styles/ProlemStatement.scss";
import Markdown from 'react-markdown'

const ProlemStatement = () => {
  return (
    <div className="problem">
        <Markdown>
            {problem_one}
        </Markdown>
    </div>
  )
}

export default ProlemStatement