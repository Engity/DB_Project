import { createClient } from '@supabase/supabase-js';
const VITE_DB_KEY = import.meta.env.VITE_DB_KEY
const VITE_DB_URL = import.meta.env.VITE_DB_URL
const supabase = createClient(VITE_DB_URL, VITE_DB_KEY);

const fetchingDataFromDB = async () => {
    const { data, error, status } = await supabase
        .from('crewmates')
        .select();

    //Error
    if (status != 200) {
        console.log(error.message);
        return [];
    }
    return data;
}

const createNewData = async (data) => {
    const { name, speed, weight, color } = data;
    //Create request

    const { error, status } = await supabase
        .from('crewmates')
        .insert({ name, speed, weight, color })
    //console.log('Create', data, status, error);
    if (status != 200) {
        return error;
    }

    return true;
}

const updateData = async (data, id) => {
    const { name, speed, weight, color } = data;

    //Update Request
    const { error, status } = await supabase
        .from('crewmates')
        .update({ name, speed, weight, color })
        .eq('id', id);
    //console.log('Update', data, status, error);
    if (status != 200) {
        return error;
    }

    return true;
}

const deleteData = async (id) => {
    const { error, status } = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id);
    if (status != 200) {
        return error;
    }

    return true;
}

export default { fetchingDataFromDB, createNewData, updateData, deleteData, supabase }