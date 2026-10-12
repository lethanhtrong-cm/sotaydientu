// Database giả lập lưu trữ toàn bộ dữ liệu quy trình và protocol
export const xrayData = [
    {
        id: "QT-XQ-01",
        title: "Chụp X-quang ngực thẳng (PA)",
        kV: "110-120",
        mAs: "2-4",
        distance: "180 cm",
        description: "Tia trung tâm khu trú ngang mức D6 (hoặc góc dưới xương bả vai). Yêu cầu bệnh nhân hít sâu nín thở.",
        standard: "Thấy được nhu mô phổi 2 bên, 2 vòm hoành, các cung sườn trước/sau, xương đòn 2 bên đối xứng. Bóng tim không bị biến dạng, thấy lấp ló các đốt sống ngực D1-D4."
    },
    {
        id: "QT-XQ-02",
        title: "Chụp X-quang ngực nghiêng (LAT)",
        kV: "110-120",
        mAs: "6-8",
        distance: "180 cm",
        description: "Bệnh nhân đứng nghiêng (thường nghiêng trái), 2 tay giơ cao lên đầu. Tia trung tâm khu trú đường nách giữa, ngang mức D6.",
        standard: "Thấy rõ khoảng sáng sau xương ức và khoảng sáng sau tim. 2 vòm hoành và góc sườn hoành rõ nét, các cung sườn chồng lên nhau."
    },
    {
        id: "QT-XQ-03",
        title: "Chụp X-quang sọ não thẳng (AP / Caldwell)",
        kV: "70-75",
        mAs: "15-20",
        distance: "100 cm",
        description: "Bệnh nhân nằm sấp hoặc đứng, cúi đầu sao cho đường trán - mũi sát phim (tư thế Caldwell). Tia trung tâm chếch 15 độ về phía chân, khu trú vào gốc mũi.",
        standard: "Xương sọ đối xứng 2 bên qua đường giữa. Bờ trên xương đá nằm ở 1/3 dưới của hốc mắt, thấy rõ xoang trán và xoang sàng."
    },
    {
        id: "QT-XQ-04",
        title: "Chụp X-quang sọ não nghiêng (LAT)",
        kV: "70-75",
        mAs: "12-15",
        distance: "100 cm",
        description: "Bệnh nhân nằm hoặc đứng nghiêng, mặt phẳng bình diện giữa song song với phim. Tia trung tâm vuông góc phim, khu trú cách ống tai ngoài 5cm lên trên và ra trước.",
        standard: "Các bản sọ trùng nhau, thấy rõ hố yên, xoang bướm, trần hốc mắt và các khớp sọ."
    },
    {
        id: "QT-XQ-05",
        title: "Chụp X-quang cột sống cổ thẳng (AP)",
        kV: "65-70",
        mAs: "10-12",
        distance: "100 cm",
        description: "Bệnh nhân nằm ngửa hoặc đứng. Hơi ngửa đầu để cằm không che lấp đốt sống cổ. Tia trung tâm chếch 15-20 độ lên đầu, khu trú sụn giáp (mức C4).",
        standard: "Thấy rõ thân đốt sống từ C3 đến T1. Khe khớp liên đốt sống mở rộng, mỏm gai nằm chính giữa thân đốt."
    },
    {
        id: "QT-XQ-06",
        title: "Chụp X-quang cột sống cổ nghiêng (LAT)",
        kV: "65-70",
        mAs: "12-15",
        distance: "150 cm",
        description: "Bệnh nhân đứng nghiêng, hạ thấp 2 vai tối đa. Tia trung tâm vuông góc, khu trú ngang mức C4.",
        standard: "Thấy rõ toàn bộ 7 đốt sống cổ (C1 - C7) và đôi khi đến T1. Thấy rõ đường cong sinh lý, khe khớp, lỗ ghép và mỏm gai sau."
    },
    {
        id: "QT-XQ-07",
        title: "Chụp X-quang cột sống thắt lưng thẳng (AP)",
        kV: "75-80",
        mAs: "30-40",
        distance: "100 cm",
        description: "Bệnh nhân nằm ngửa, co 2 gối để áp sát thắt lưng xuống bàn chụp. Tia trung tâm khu trú rốn hoặc bờ trên mào chậu.",
        standard: "Thấy rõ các thân đốt từ T12 đến S1. Khớp cùng chậu 2 bên đối xứng, mỏm gai nằm giữa, mỏm ngang hai bên đối xứng."
    },
    {
        id: "QT-XQ-08",
        title: "Chụp X-quang cột sống thắt lưng nghiêng (LAT)",
        kV: "80-90",
        mAs: "40-50",
        distance: "100 cm",
        description: "Bệnh nhân nằm nghiêng, gập gối để giữ thăng bằng. Đệm dưới eo để cột sống song song mặt bàn. Tia trung tâm khu trú dọc đường nách giữa, ngang mào chậu.",
        standard: "Thấy rõ thân đốt L1-L5 và xương cùng. Lỗ ghép mở rộng, các thân đốt không bị xoay, gai sau rõ nét."
    },
    {
        id: "QT-XQ-09",
        title: "Chụp X-quang bụng đứng không chuẩn bị (KUB)",
        kV: "75-85",
        mAs: "25-35",
        distance: "100 cm",
        description: "Bệnh nhân đứng thẳng, nín thở khi chụp. Tia trung tâm ngang mức mào chậu.",
        standard: "Lấy được toàn bộ ổ bụng từ 2 vòm hoành (rất quan trọng để tìm liềm hơi) đến khớp mu. Thấy lờ mờ bóng cơ đái chậu 2 bên."
    },
    {
        id: "QT-XQ-10",
        title: "Chụp X-quang khung chậu thẳng (Pelvis AP)",
        kV: "75-80",
        mAs: "25-30",
        distance: "100 cm",
        description: "Bệnh nhân nằm ngửa, xoay 2 mũi chân vào trong 15 độ (để bộc lộ rõ cổ xương đùi). Tia trung tâm điểm giữa đường nối 2 gai chậu trước trên và khớp mu.",
        standard: "Lấy toàn bộ khung chậu và 1/3 trên 2 xương đùi. Cánh chậu và lỗ bịt 2 bên đối xứng. Thấy rõ khe khớp háng."
    },
    {
        id: "QT-XQ-11",
        title: "Chụp X-quang khớp gối thẳng/nghiêng",
        kV: "60-65",
        mAs: "5-8",
        distance: "100 cm",
        description: "Thẳng: Bệnh nhân nằm/ngồi, chân duỗi thẳng, tia trung tâm dưới xương bánh chè 1cm. Nghiêng: Gập gối 20-30 độ, tia trung tâm đi qua khe khớp.",
        standard: "Thẳng: Thấy rõ khe khớp gối, mâm chày, lồi cầu đùi đối xứng. Nghiêng: Xương bánh chè tách khỏi lồi cầu đùi, mâm chày chồng lên nhau."
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
