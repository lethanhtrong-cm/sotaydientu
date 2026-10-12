// Điểm khởi chạy của ứng dụng, import các chức năng từ modules
import { xrayData, ctMriData, emergencyProtocols } from './modules/data.js';
import { calculateContrastDose } from './modules/calculator.js';

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("#nav-menu li");
    const moduleTitle = document.getElementById("module-title");
    const contentContainer = document.getElementById("content-container");

    // Hàm render HTML động dựa trên dữ liệu array
    const renderList = (dataList) => {
        return dataList.map(item => `
            <div class="card">
                <h3>${item.id}: ${item.title}</h3>
                ${item.kV ? `<p><strong>Thông số:</strong> kV: ${item.kV} \vert{} mAs:${item.mAs} | Khoảng cách: ${item.distance}</p>` : ''}
                ${item.sequences ? `<p><strong>Chuỗi xung:</strong> ${item.sequences}</p>` : ''}
                <p><strong>Hướng dẫn:</strong> ${item.description}</p>
                ${item.standard ? `<p style="margin-top: 8px; color: #2980b9;"><strong>Tiêu chuẩn đạt:</strong> ${item.standard}</p>` : ''}
            </div>
        `).join('');
    };

    // Hàm render giao diện công cụ tính liều
    const renderTools = () => {
        return `
            <div class="card">
                <h3>Tính liều thuốc cản quang</h3>
                <div class="form-group">
                    <label>Cân nặng (kg):</label>
                    <input type="number" id="weight-input" placeholder="Nhập cân nặng...">
                </div>
                <div class="form-group">
                    <label>eGFR (ml/min/1.73m2 - Tùy chọn):</label>
                    <input type="number" id="egfr-input" placeholder="Nhập chỉ số eGFR...">
                </div>
                <button id="btn-calc">Tính Toán</button>
                <div id="calc-result"></div>
            </div>
            <div class="card">
                <h3>${emergencyProtocols.title}</h3>
                <p style="color: red; font-weight: bold;">${emergencyProtocols.content}</p>
            </div>
        `;
    };

    // Hàm xử lý chuyển đổi màn hình (Routing cơ bản)
    const switchModule = (moduleName) => {
        contentContainer.innerHTML = "";
        
        if (moduleName === "xray") {
            moduleTitle.textContent = "Quy trình X-quang & Siêu âm";
            contentContainer.innerHTML = renderList(xrayData);
        } else if (moduleName === "ctmri") {
            moduleTitle.textContent = "Protocol CT & MRI";
            contentContainer.innerHTML = renderList(ctMriData);
        } else if (moduleName === "tools") {
            moduleTitle.textContent = "Công cụ hỗ trợ & Cấp cứu";
            contentContainer.innerHTML = renderTools();
            
            // Gắn sự kiện cho nút tính toán sau khi DOM được render
            document.getElementById("btn-calc").addEventListener("click", () => {
                const weight = parseFloat(document.getElementById("weight-input").value);
                const eGFR = parseFloat(document.getElementById("egfr-input").value);
                const resultDiv = document.getElementById("calc-result");
                
                const result = calculateContrastDose(weight, eGFR);
                resultDiv.textContent = result.message;
                resultDiv.style.color = result.error ? "red" : "#27ae60";
            });
        }
    };

    // Khởi tạo mặc định
    switchModule("xray");

    // Lắng nghe sự kiện click trên thanh điều hướng
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            // Cập nhật trạng thái active
            navItems.forEach(nav => nav.classList.remove("active"));
            e.target.classList.add("active");

            // Chuyển đổi nội dung tương ứng
            const targetModule = e.target.getAttribute("data-module");
            switchModule(targetModule);
        });
    });
});
