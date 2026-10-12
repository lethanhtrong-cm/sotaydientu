// Module xử lý các công cụ tính toán lâm sàng
export function calculateContrastDose(weight, eGFR) {
    if (!weight || weight <= 0) {
        return { error: true, message: "Vui lòng nhập cân nặng hợp lệ." };
    }
    
    // Giả định liều cơ bản là 1.5 ml/kg
    let baseDose = weight * 1.5; 
    let warning = "";

    if (eGFR && eGFR < 60) {
        warning = "CẢNH BÁO: eGFR thấp (<60). Cần hội chẩn bác sĩ chẩn đoán hình ảnh trước khi tiêm!";
    }

    return {
        error: false,
        dose: Math.round(baseDose),
        message: `Liều thuốc cản quang đề xuất: ${Math.round(baseDose)} ml. ${warning}`
    };
}
