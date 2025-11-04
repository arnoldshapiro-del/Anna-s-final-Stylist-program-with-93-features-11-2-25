import { useState } from "react";
import { generateText } from "../lib/geminiClient";

export default function APITestPage() {
  const [out, setOut] = useState("Click the button to test.");
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      const result = await generateText("Say 'ready'.");
      setOut("✅ SUCCESS!\n\n" + result);
    } catch (error: any) {
      setOut("❌ ERROR:\n\n" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Gemini API Test</h1>
      <button 
        onClick={handleTest}
        disabled={loading}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: loading ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer"
        }}
      >
        {loading ? "Testing..." : "Test Gemini"}
      </button>
      <pre style={{ 
        whiteSpace: "pre-wrap", 
        marginTop: 16,
        padding: 16,
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        border: "1px solid #ddd"
      }}>
        {out}
      </pre>
    </div>
  );
}
