import './App.css';
import React, { Component } from "react";
import VerticalBarChart from './component/charts/vertical-bar-chart';
import Header from './component/header/header';
const hookfishData = require('../src/db/hookfish.json');
const gamineData = require('../src/db/gamine.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      hookfishEmployees: {},
      gamineEmployees: {},
      hookFishEmployeeTotal: 0,
      hookFishMaleTotal: 0,
      hookFishFemaleTotal: 0,
      gamineEmployeeTotal: 0,
      gamineMaleTotal: 0,
      gamineFemaleTotal: 0,
    }
  }

  componentWillMount() {
    this.getHookFishData();
    this.getGamineData();
  }

  getAverageSalary(arrayOfSalary) {
    let total = 0;
    let sum = arrayOfSalary.reduce((a, b) => {
      return a + b.salary
    }, total)
    return Math.floor(sum / arrayOfSalary.length + 1);
  }

  getFemaleGender(employeeData, level) {
    return employeeData.filter(employee => employee.level === level && employee.gender === 'Female');
  }

  getMaleGender(employeeData, level) {
    return employeeData.filter(employee => employee.level === level && employee.gender === 'Male');
  }

  getTotalEmployees(employeeData) {
    return employeeData.length;
  }

  getTotalFemaleEmployees(employeeData) {
    return employeeData.filter(employee => employee.gender === 'Female').length;
  }
  getTotalMaleEmployees(employeeData) {
    return employeeData.filter(employee => employee.gender === 'Male').length;
  }

  getGamineData() {
    // get male data
    const maleGamineEmployeeLevel1 = this.getMaleGender(gamineData, 1);
    const maleGamineEmployeeLevel2 = this.getMaleGender(gamineData, 2);
    const maleGamineEmployeeLevel3 = this.getMaleGender(gamineData, 3);
    const maleGamineEmployeeLevel4 = this.getMaleGender(gamineData, 4);
    const maleGamineEmployeeLevel5 = this.getMaleGender(gamineData, 5);

    // get female data
    const femaleGamineEmployeeLevel1 = this.getFemaleGender(gamineData, 1);
    const femaleGamineEmployeeLevel2 = this.getFemaleGender(gamineData, 2);
    const femaleGamineEmployeeLevel3 = this.getFemaleGender(gamineData, 3);
    const femaleGamineEmployeeLevel4 = this.getFemaleGender(gamineData, 4);
    const femaleGamineEmployeeLevel5 = this.getFemaleGender(gamineData, 5);

    const salaryForMaleGamineEmployeeLevel1 = this.getAverageSalary(maleGamineEmployeeLevel1);
    const salaryForMaleGamineEmployeeLevel2 = this.getAverageSalary(maleGamineEmployeeLevel2);
    const salaryForMaleGamineEmployeeLevel3 = this.getAverageSalary(maleGamineEmployeeLevel3);
    const salaryForMaleGamineEmployeeLevel4 = this.getAverageSalary(maleGamineEmployeeLevel4);
    const salaryForMaleGamineEmployeeLevel5 = this.getAverageSalary(maleGamineEmployeeLevel5);

    const salaryForFemaleGamineEmployeeLevel1 = this.getAverageSalary(femaleGamineEmployeeLevel1);
    const salaryForFemaleGamineEmployeeLevel2 = this.getAverageSalary(femaleGamineEmployeeLevel2);
    const salaryForFemaleGamineEmployeeLevel3 = this.getAverageSalary(femaleGamineEmployeeLevel3);
    const salaryForFemaleGamineEmployeeLevel4 = this.getAverageSalary(femaleGamineEmployeeLevel4);
    const salaryForFemaleGamineEmployeeLevel5 = this.getAverageSalary(femaleGamineEmployeeLevel5);
    this.setState({
      gamineEmployeeTotal: this.getTotalEmployees(gamineData),
      gamineMaleTotal: this.getTotalMaleEmployees(gamineData),
      gamineFemaleTotal: this.getTotalFemaleEmployees(gamineData),
      gamineEmployees: {
        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
        datasets: [
          {
            label: 'Male',
            data: [salaryForMaleGamineEmployeeLevel1, salaryForMaleGamineEmployeeLevel2, salaryForMaleGamineEmployeeLevel3, salaryForMaleGamineEmployeeLevel4, salaryForMaleGamineEmployeeLevel5],
            backgroundColor: 'rgba(0, 0, 255, 0.5)'
          },
          {
            label: 'Female',
            data: [salaryForFemaleGamineEmployeeLevel1, salaryForFemaleGamineEmployeeLevel2, salaryForFemaleGamineEmployeeLevel3, salaryForFemaleGamineEmployeeLevel4, salaryForFemaleGamineEmployeeLevel5],
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
          }
        ]
      }
    });
  }

  getHookFishData() {
    // get male data
    const maleHookFishEmployeeLevel1 = this.getMaleGender(hookfishData, 1);
    const maleHookFishEmployeeLevel2 = this.getMaleGender(hookfishData, 2);
    const maleHookFishEmployeeLevel3 = this.getMaleGender(hookfishData, 3);
    const maleHookFishEmployeeLevel4 = this.getMaleGender(hookfishData, 4);
    const maleHookFishEmployeeLevel5 = this.getMaleGender(hookfishData, 5);

    // get female data
    const femaleHookFishEmployeeLevel1 = this.getFemaleGender(hookfishData, 1);
    const femaleHookFishEmployeeLevel2 = this.getFemaleGender(hookfishData, 2);
    const femaleHookFishEmployeeLevel3 = this.getFemaleGender(hookfishData, 3);
    const femaleHookFishEmployeeLevel4 = this.getFemaleGender(hookfishData, 4);
    const femaleHookFishEmployeeLevel5 = this.getFemaleGender(hookfishData, 5);

    // get salaries for males
    const salaryForMaleEmployeeLevel1 = this.getAverageSalary(maleHookFishEmployeeLevel1);
    const salaryForMaleEmployeeLevel2 = this.getAverageSalary(maleHookFishEmployeeLevel2);
    const salaryForMaleEmployeeLevel3 = this.getAverageSalary(maleHookFishEmployeeLevel3);
    const salaryForMaleEmployeeLevel4 = this.getAverageSalary(maleHookFishEmployeeLevel4);
    const salaryForMaleEmployeeLevel5 = this.getAverageSalary(maleHookFishEmployeeLevel5);

    // get salaries for females
    const salaryForFemaleEmployeeLevel1 = this.getAverageSalary(femaleHookFishEmployeeLevel1);
    const salaryForFemaleEmployeeLevel2 = this.getAverageSalary(femaleHookFishEmployeeLevel2);
    const salaryForFemaleEmployeeLevel3 = this.getAverageSalary(femaleHookFishEmployeeLevel3);
    const salaryForFemaleEmployeeLevel4 = this.getAverageSalary(femaleHookFishEmployeeLevel4);
    const salaryForFemaleEmployeeLevel5 = this.getAverageSalary(femaleHookFishEmployeeLevel5);


    this.setState({
      hookFishEmployeeTotal: this.getTotalEmployees(hookfishData),
      hookFishMaleTotal: this.getTotalMaleEmployees(hookfishData),
      hookFishFemaleTotal: this.getTotalFemaleEmployees(hookfishData),
      hookfishEmployees: {
        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
        datasets: [
          {
            label: 'Male',
            data: [salaryForMaleEmployeeLevel1, salaryForMaleEmployeeLevel2, salaryForMaleEmployeeLevel3, salaryForMaleEmployeeLevel4, salaryForMaleEmployeeLevel5],
            backgroundColor: 'rgba(0, 0, 255, 0.5)'
          },
          {
            label: 'Female',
            data: [salaryForFemaleEmployeeLevel1, salaryForFemaleEmployeeLevel2, salaryForFemaleEmployeeLevel3, salaryForFemaleEmployeeLevel4, salaryForFemaleEmployeeLevel5],
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
          }
        ]
      },
    });
  }

  // Ran out of time: Could not implement data for employment type and their salaries
  // getHookFishEmployementTypeData() {
  //   const fullTimeEmployee = hookfishData.filter(employee => employee.employmentType === 'fullTime');
  //   const partTimeEmployee = hookfishData.filter(employee => employee.employmentType === 'Part time');
  //   const contractorEmployee = hookfishData.filter(employee => employee.employmentType === 'contractor');

  //   const salaryForFullTimeEmployees = this.getAverageSalary(fullTimeEmployee);
  //   const salaryForPartTimeEmployees = this.getAverageSalary(partTimeEmployee);
  //   const salaryForContractorEmployees = this.getAverageSalary(contractorEmployee);

  //   this.setState({
  //     employmentTypeHookfish: {
  //       labels: ['Full time', 'Part time', 'Contractor'],
  //       datasets: [
  //         {
  //           label: 'Hookfish salary',
  //           data: [salaryForFullTimeEmployees, salaryForPartTimeEmployees, salaryForContractorEmployees],
  //           backgroundColor: 'rgba(0, 0, 255, 0.5)'
  //         }

  //       ]
  //     }
  //   });
  // }

  render() {
    return (
      <div class="app">

        <section>
          <Header />
          <div class="chart">
            <VerticalBarChart
              chartData={this.state.hookfishEmployees}
              employeeTotal={this.state.hookFishEmployeeTotal}
              maleTotal={this.state.hookFishMaleTotal}
              femaleTotal={this.state.hookFishFemaleTotal}
              title='Hookfish'
            />
          </div>
          <div class="chart">
            <VerticalBarChart
              chartData={this.state.gamineEmployees}
              employeeTotal={this.state.gamineEmployeeTotal}
              maleTotal={this.state.gamineMaleTotal}
              femaleTotal={this.state.gamineFemaleTotal}
              title='Gamine'
            />
          </div>
        </section>


        {/* Ran out of time: Could not implement data for employement type and their salaries */}
        {/* <section>
          Below you will find a visualization of your pay difference among male and female employees.
            <HorizontalBarChart chartData={this.state.hookfishEmployees} title='Hookfish' />
            <HorizontalBarChart chartData={this.state.gamineEmployees} title='Gamine' />
        </section> */}

      </div>
    );
  }
}

export default App;
