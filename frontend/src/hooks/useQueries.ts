import { useEffect, useState } from "react";
import api from "../api/api";
import { Query } from "../../../shared/types";

export function useQueries() {
    const [queries, setQueries] = useState<Query[]>([]);
    useEffect(() => {
        api.get("/queries/history").then((res) => setQueries(res.data.history));
    }, []);
    return queries;
}
