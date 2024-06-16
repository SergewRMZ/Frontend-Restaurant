<template>
  <div>
    <h2 class="mt-5">¡Bienvenido {{ name }}!</h2>

    <div class="container">
      <div class="row justify-content-start">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <div class="container1">
            <div class="calendar">
              <div class="calendar-header">
                <div class="month-picker">
                  <span class="month-change" @click="changeMonth(-1)">&#9664;</span>
                  <span id="month-picker">{{ monthNames[currentMonth] }}</span>
                  <span class="month-change" @click="changeMonth(1)">&#9654;</span>
                </div>

                <div class="year-picker" id="year-picker">
                  <span class="year-change" id="pre-year" @click="changeYear(-1)">
                    &#9664;</span>
                  <span id="year">{{ currentYear }}</span>
                  <span class="year-change" id="next-year" @click="changeYear(1)">
                    &#9654;</span>
                </div>
              </div>

              <div class="calendar-body">
                <div class="calendar-week-days">
                  <div v-for="day in weekDays" :key="day">{{ day }}</div>
                </div>
                <div class="calendar-days">
                  <div v-for="day in days" :key="day" v-html="day" @click="selectDate(day)"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <div class="login">
            <form class="form1" @submit.prevent="handleSubmit">
              <h1 class="h11">Reservación</h1>
              <label class="label1">Número de personas</label>
              <input class="input1" v-model="numPersonas" id="numPersonas" name="numPersonas" type="number" min="1"
                required>

              <label class="label1">Fecha</label>
              <input class="input1" v-model="date" id="date" name="date" type="date" required>

              <label class="label1">Hora</label>
              <input class="input1" v-model="time" id="time" type="time" required>

              <button class="button11" type="submit" :disabled="!isFormValid">Reservar</button>
            </form>
          </div>
        </div>

        <div class="col-lg-12 ms-auto p-lg-4 mt-lg-0 mt-4">
          <div class="rotating-card-container">
            <div class="card card-rotate card-background card-background-mask-info shadow-info mt-md-0 mt-5">
              <div class="front front-background">
                <div class="row">
                  <div class="col-lg-6 card-body py-7 text-center">
                    <img src="@/assets/Restaurante3.jpg" class="img-fluid" />
                  </div>
                  <div class="col-lg-6 card-body py-7 d-flex flex-column justify-content-center">
                    <div class="date-time-formate">
                      <div class="date-time-value">
                        <div class="time-formate">{{ currentTime }}</div>
                        <div class="date-formate">{{ currentDate }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      numPersonas: 1,
      date: '',
      time: '',

      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: [],
      monthNames: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      weekDays: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
      currentTime: '',
      currentDate: '',
    }
  },

  computed: {
    ...mapState('user', ['name']),
    ...mapState('reservation', ['reservation', 'message_error']),

    isFormValid() {
      return this.numPersonas && this.date && this.time;
    }
  },

  methods: {
    ...mapActions('reservation', ['createReservation']),
    ...mapMutations('reservation', ['clearErrorMessage']),

    async handleSubmit () {
      const data = {
        numberPeople: this.numPersonas,
        date: this.date,
        time: this.time
      }

      await this.createReservation(data);
      Swal.fire({
          title: this.message_error ? this.message_error : 'Reservación creada correctamente',
          position: 'center',
          icon: this.message_error ? 'error' : 'success',
          timer: 1500
        })

      this.clearErrorMessage();
    },

    isLeapYear(year) {
      return (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0)
      );
    },
    getFebDays(year) {
      return this.isLeapYear(year) ? 29 : 28;
    },

    generateCalendar(month, year) {
      const daysOfMonth = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const currentDate = new Date();
      this.days = [];
      const firstDay = new Date(year, month).getDay();

      for (let i = 0; i < daysOfMonth[month] + firstDay; i++) {
        if (i >= firstDay) {
          const day = i - firstDay + 1;
          const dayH = day === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()
            ? `<span class="current-date">${day}</span>`
            : day;
          this.days.push(dayH);
        }
        else {
          this.days.push('');
        }
      }
    },
    changeYear(direction) {
      this.currentYear += direction;
      this.generateCalendar(this.currentMonth, this.currentYear);
    },
    changeMonth(direction) {
      this.currentMonth += direction;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
      else if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      }
      this.generateCalendar(this.currentMonth, this.currentYear);
    },
    selectMonth(index) {
      this.currentMonth = index;
      this.showMonthList = false;
      this.generateCalendar(this.currentMonth, this.currentYear);
    },
    selectDate(day) {
      if (!isNaN(day)) {
        const formattedMonth = (this.currentMonth + 1).toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
        this.date = `${this.currentYear}-${formattedMonth}-${formattedDay}`;
      }
    },
    updateTimeAndDate() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('es-ES');
      this.currentDate = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      });
    }
  },
  mounted() {
    this.generateCalendar(this.currentMonth, this.currentYear);
    this.updateTimeAndDate();
    setInterval(this.updateTimeAndDate, 1000);
  }
}
</script>

<style>
.date-time-formate {
  width: max-content;
  height: max-content;
  font-family: Dubai Light, Century Gothic;
  position: relative;
  display: inline;
  justify-content: center;
}

.day-text-formate {
  font-family: Microsoft JhengHei UI;
  font-size: 2.5rem;
  padding-right: 5%;
  border-right: 3px solid #070728;
  position: absolute;
}

.date-time-value {
  display: block;
  height: max-content;
  width: max-content;
  position: relative;

  top: -5px;
  text-align: justify;
  font-size: 2rem;
}

.time-formate {
  font-size: 4rem;
}

.time-formate.hideTime {
  animation: hidetime 1.5s forwards;
}

.day-text-formate.hidetime {
  animation: hidetime 1.5s forwards;
}

.date-formate.hideTime {
  animation: hidetime 1.5s forwards;
}

.day-text-formate.showtime {
  animation: showtime 1s forwards;
}

.time-formate.showtime {
  animation: showtime 1s forwards;
}

.date-formate.showtime {
  animation: showtime 1s forwards;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.body1 {
  place-items: center;
  font-family: var(--font-family);
  background: linear-gradient(to right, #07072e, #679be8);
  overflow: hidden;
}

.container1 {
  width: max-content;
  height: max-content;
  position: relative;
  display: flex;
  padding: 2% 0px 0px 0px;
  justify-content: center;
  top: 10%;
  right: 0%;
  width: 100%;
  height: 100%;
}

.calendar {
  height: 610px;
  width: max-content;
  border-radius: 25px;
  overflow: hidden;
  padding: 3px 5px 0px 5px;
  box-shadow: var(--shadow);
}

.calendar-header {
  background: #161556;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: var(--white);
  padding: 10px;
}

.calendar-body {
  pad: 1px;
}

.calendar-week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 600;
  cursor: pointer;
  color: rgb(104, 104, 104);
}

.calendar-week-days div:hover {
  color: black;
  transform: scale(1.2);
  transition: all .2s ease-in-out;
}

.calendar-week-days div {
  display: grid;
  place-items: center;
  color: var(--bg-second);
  height: 50px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  color: var(--color-txt);
}

.calendar-days div {
  width: 37px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  animation: to-top 1s forwards;
}

.month-picker {
  display: flex;
  align-items: center;
}

.month-change {
  cursor: pointer;
  margin: 0 10px;
  font-size: 20px;
}

.month-picker span {
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.month-picker span:hover {
  color: var(--color-txt);
}

.year-picker {
  display: flex;
  align-items: center;
}

.year-change {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0px 10px;
  cursor: pointer;
}

.year-change:hover {
  background-color: var(--light-btn);
  transition: all .2s ease-in-out;
  transform: scale(1.12);
}

.year-change:hover pre {
  color: var(--bg-body);
}

.calendar-footer {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#year:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;
}

.calendar-days div span {
  position: absolute;
}

.calendar-days div:hover {
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  background-color: #170188;
  border-radius: 20%;
  color: var(--dark-text);
}
</style>
