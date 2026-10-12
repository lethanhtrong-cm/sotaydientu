// Database giả lập lưu trữ toàn bộ dữ liệu quy trình và protocol
export const xrayData = [
    {
        id: "QT-XQ-01",
        title: "Chụp X-quang ngực thẳng",
        kV: "110-120",
        mAs: "2-4",
        distance: "180 cm",
        description: "Tia trung tâm khu trú ngang mức D6. Yêu cầu bệnh nhân hít sâu nín thở."
    },
    {
        id: "QT-XQ-02",
        title: "Chụp X-quang cột sống thắt lưng (Thẳng/Nghiêng)",
        kV: "70-80 (Thẳng) / 80-90 (Nghiêng)",
        mAs: "30-40",
        distance: "100 cm",
        description: "Chú ý che chắn an toàn bức xạ khu vực sinh dục."
    }
];

export const ctMriData = [
    {
        id: "PT-CT-01",
        title: "Protocol CT Sọ não không tiêm thuốc",
        sliceThickness: "5 mm",
        pitch: "0.8",
        description: "Chụp từ lỗ chẩm đến vòm sọ. FOV điều chỉnh vừa vặn hộp sọ để tối ưu chất lượng ảnh."
    },
    {
        id: "PT-MRI-01",
        title: "Protocol MRI Cột sống cổ (1.5 Tesla)",
        sequences: "T1W Sag, T2W Sag, STIR Sag, T2W Ax",
        description: "Kiểm tra kỹ bảng kiểm chống chỉ định MRI (kim loại, máy tạo nhịp) trước khi chụp."
    }
];

export const emergencyProtocols = {
    title: "Phác đồ xử trí phản vệ",
    content: "Ngừng ngay thuốc cản quang. Tiêm bắp Adrenalin 1mg/1ml (người lớn 0.5ml). Gọi hỗ trợ kíp trực cấp cứu ngay lập tức."
};
