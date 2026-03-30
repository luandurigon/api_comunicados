export default function handler(req, res) {
    res.status(200).json({
        status: "ok",
        sistema: "API de Comunicados Eventos ",
        ambiente: "Cloud"
    });
}
