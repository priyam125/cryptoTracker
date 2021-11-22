import React , {useRef} from 'react';
import { Line, Bar } from "react-chartjs-2";

const Chart = (props) => {

    const data = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(0,0,0,275)
        gradient.addColorStop(0, "#9f90ee")
        gradient.addColorStop(0.3, "#ecebf7")
        gradient.addColorStop(1, "white")

        return {
            labels: props.historicData.map((data) => {
                let date= new Date(data[0])
                let time = date.getHours() > 12 
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM `
                  : `${date.getHours()}:${date.getMinutes()} PM `;
  
                  return props.daysChart === 1 ? time: date.toLocaleDateString()
              }),
            datasets: [
                {
                    // label: "no of votes",
                    data: props.historicData.map((data) => data[1]),
                    label: `Price (Past ${props.daysChart} days) in USD`,
                    borderColor: "#4B40EE",
                    fill: true,
                    borderWidth: 1,
                    backgroundColor: gradient,
                    datalabels: {
                        color: "#44ff44"
                    }
                }
            ]
        }

    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                    borderColor: "#c2bebe"
                },
                ticks: {
                    display: false,
                    // color: "#c2bebe"
                },
            },
            y: {
                grid: {
                    display: false,
                    borderColor: "#c2bebe"
                },
                ticks: {
                    display: false
                }
            }
        },
        elements: {
            point: {
              radius: 0
            }
          },
        plugins: {
            legend: {
                display: false
            }
        },
        tooltips: {
            displayColors: false,
            backgroundColor: "red"
        }   
        
    }
    
    return (
        <div className="">
          { props.historicData ? 
            <div>
            <Line data= {data}
            height={275}
            width={150}
            options={options}
            
              />
            </div> : <div className="pt-8 flex flex-col items-center justify-center">Loading</div>
        }
          
        </div> 
           )
}

export default Chart

