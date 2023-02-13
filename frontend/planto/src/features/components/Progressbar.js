import React from 'react'
import './progressbar.css'

const ProgressContainer = ({like}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${like}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done font-PreL" style={style}>
				{like}%
			</div>
		</div>
	)
}



//   class ProgressContainer extends React.Component {
//     constructor() {
//       super()
//       const progressInit = 2
//       const goalInit = 5
//       this.state = {
//         progress: progressInit,
//         validProgress: progressInit,
//         goal: goalInit,
//         validGoal: goalInit
//       };
      
//       this.changeProgress = this.changeProgress.bind(this);
//       this.changeGoal = this.changeGoal.bind(this);
//     }
    
//     changeProgress(event) {
//       if (event.target.value) {
//         this.setState({progress: event.target.value}) 
//         this.setState({validProgress: event.target.value}) 
//       } else {
//         this.setState({progress: event.target.value}) 
//       }
//     }
    
//     changeGoal(event) {
//       if (event.target.value) {
//         this.setState({goal: event.target.value}) 
//         this.setState({validGoal: event.target.value}) 
//       } else {
//         this.setState({goal: event.target.value}) 
//       }
//     }
    
    
//     render() {
//       return(
//         <div>
//           <label className="block mbq">Progress</label>
//           <input type="text" className="mb1" value={this.state.progress} onChange={this.changeProgress}/>
//           <label className="block mbq">Goal</label>
//           <input type="text" value={this.state.goal} onChange={this.changeGoal} />
//           <div className="progress-container">
//             <ProgressBar 
//               progress={this.state.validProgress}
//               goal={this.state.validGoal}
//               />
//           </div>
//         </div>
//       )
//     }
//   }
  
//   class ProgressBar extends React.Component {
//     calculateProgress(progress, goal) {
//       if (Number(progress) === 0) {
//         return 0.75 + "%"
//       }
//       if (Number(goal) >= Number(progress)) {
//         return (progress/goal) * 100 + "%"
//       } else {
//         return 100 + "%"
//       }
//     }
    
//     render() {
//       const { progress, goal } = this.props
//       return (
//         <div 
//           className="progress-bar"
//           style={{width: this.calculateProgress(progress, goal) }}
//          ></div>
//       )
//     }
//   }


export default ProgressContainer