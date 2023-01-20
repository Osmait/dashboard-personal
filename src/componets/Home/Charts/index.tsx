import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { getTransaction } from "../../../api/income";
import { useEffect, useState } from "react";
import { TransactionInterface } from "../../../Interfase/Transaction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Reporte Mensual",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function Charts() {
  const [dataAnual, setDataAnual] = useState<TransactionInterface[]>([]);
  const date = new Date();
  const year = date.getFullYear();

  const fechaInicio = `${year}-1-1`;
  const fechaFinal = `${year}-12-31`;

  useEffect(() => {
    const Consulta = async () => {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
      const yearDAta = await getTransaction(
        token,
        "general",
        fechaInicio,
        fechaFinal
      );
      setDataAnual(yearDAta);
    };
    Consulta();
  }, []);

  const mesesIncome = Array(12).fill(0)
  const mesesBill = Array(12).fill(0)

  if (dataAnual) {
    for (let v of dataAnual) {
      let index = parseInt(v.created_at.split("-")[1]);
      if (v.type_transation === "income") {
        mesesIncome[index - 1] += v.amount;
      } else {
        mesesBill[index - 1] += Math.abs(v.amount);
      }
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Gastos",
        data: mesesBill,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Ingresos",
        data: mesesIncome,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return dataAnual ? (
    <Bar options={options} data={data} />
  ) : (
    <h1>No hay datos..</h1>
  );
}
