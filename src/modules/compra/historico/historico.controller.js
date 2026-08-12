import HistoricoService from "./historico.service.js";
import * as response from "../../../core/utils/response.js";
import { asyncHandler } from "../../../core/utils/asyncHandler.js";

const HistoricoController = {
    getHistoricoById: async (req, res) => {
        const data = await HistoricoService.getHistoricoById(Number(req.params.id));
        return response.success(res, {
            message: "Histórico listado",
            data
        });
    },

    getAll: asyncHandler(async (req, res) => {
        const data = await HistoricoService.getAll();
        return response.success(res, {
            message: "Histórico listado",
            data
        });
    })
};

export default HistoricoController;