import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './Windows/MacWindow'
import './Cli.scss'

const Cli = ({setWindowState,WindowName,ActiveWindow,setActiveWindow}) => {
const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  about: {
  description: 'About me',
  usage: 'about [skills | education | contact]',
  fn: (...args) => {
    if (args.length === 0) {
      return `
Arya Chakraborty
Web Developer | BCA Student
Type: about skills / education / contact
      `;
    }

    switch (args[0]) {
      case 'skills':
        return 'HTML, CSS, JavaScript, React, SCSS';

      case 'education':
        return 'BCA – 1st Year';

      case 'contact':
        return 'Email: your@email.com | GitHub: github.com/arya';

      default:
        return 'Unknown option. Try: about skills';
    }
  }
}

}

  return (
    <MacWindow setWindowState={setWindowState} WindowName={WindowName} ActiveWindow={ActiveWindow} setActiveWindow={setActiveWindow}>
        <div className="cli-window">
        <Terminal
        commands={commands}
        welcomeMessage={`Welcome to AryaOS Terminal 🚀

Available commands:
• about        → Who am I
• skills       → My tech stack
• projects     → What I’ve built
• contact      → How to reach me

Type 'help' to see all commands.`}
        promptLabel={'me@Arya~'}
        promptLabelStyle ={{color:'rgb(2, 65, 7)'}}
        
      />
        </div>
    </MacWindow>
  )
}

export default Cli
