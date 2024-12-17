import { createClient } from "@supabase/supabase-js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);

const supabaseUrl = "https://cqidqrqcwnptczzmhdwi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxaWRxcnFjd25wdGN6em1oZHdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NTA4MjksImV4cCI6MjA0OTUyNjgyOX0.ahANrBL_lrvMdXWVLMhP_h-1GvUzOwzZay7x3zP2wFI";
const supabase = createClient(supabaseUrl, supabaseKey);

export const getUsers = async () => {
  try {
    const { data: users, error } = await supabase.from("user").select("*");

    if (error) throw error;
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
    return null;
  }
};

export const insertUser = async (userData) => {
  try {
    const { data, error } = await supabase
      .from("user")
      .insert([
        {
          user_name: userData.nome,
          registration_number: userData.matricula,
        },
      ])
      .select(); // Adicionar esta linha
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao inserir usuário:", error.message);
    return null;
  }
};

// Adicione também uma função para inserir reserva
export const insertReserva = async (reservaData) => {
  try {
    const { data, error } = await supabase
      .from("reserva")
      .insert([
        {
          room_number: reservaData.sala,
          reservation_date: reservaData.data,
          reservation_time: reservaData.horario,
          registration_number: reservaData.matricula, // Adicionando matrícula para relacionamento
        },
      ])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao inserir reserva:", error.message);
    return null;
  }
};

export const deleteUser= async(userData)=>{
  
const { error } = await supabase
.from('user')
.delete()
.eq('registration_number', userData)



}
export const deleteReservation= async(userData)=>{
  
const { error } = await supabase
.from('reserva')
.delete()
.eq('registration_number', userData)



}
