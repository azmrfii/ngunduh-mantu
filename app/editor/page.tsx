"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { Copy, Share2, CornerDownRight } from 'lucide-react';

// URL dasar (untuk penggunaan lokal atau deployed)
const BASE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://undangan-anda.com';

// Fungsi utilitas untuk menyalin teks
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Teks berhasil disalin!');
  }).catch(err => {
    console.error('Gagal menyalin teks:', err);
  });
};

const InvitationEditor = () => {
  const [guestNameInput, setGuestNameInput] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [generatedMessage, setGeneratedMessage] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const handleGenerate = useCallback(() => {
    if (!guestNameInput.trim()) {
      setFeedback("Mohon masukkan nama tamu.");
      return;
    }
    setFeedback("");

    // 1. Membersihkan dan Mengenkode Nama untuk URL
    // Mengganti spasi dengan + dan enkoding komponen URI penuh
    const encodedName = encodeURIComponent(guestNameInput.trim());
    
    // Format URL dinamis (sesuai struktur: /to:Nama)
    const personalUrl = `${BASE_URL}/to:${encodedName}`;
    setGeneratedLink(personalUrl);

    // 2. Membuat Pesan WhatsApp/Copy
    const greetingName = guestNameInput.trim();
    
    // Mengganti baris baru (\n) dengan <br/> untuk tampilan JSX
    const messageTemplate = `
Yth. ${greetingName}

Assalamualaikum Warahmatullahi Wabarakatuh

Dengan memohon Rahmat dan Ridho Allah SWT, dan tanpa mengurangi rasa hormat melalui pesan ini kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara ngunduh mantu kami :

Rudy & Mega

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :
${personalUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.

Terima kasih banyak atas perhatiannya.

Wassalamualaikum Warahmatullahi Wabarakatuh
    `.trim();

    setGeneratedMessage(messageTemplate);

  }, [guestNameInput]);

  const handleCopy = () => {
    copyToClipboard(generatedMessage);
    setFeedback("Pesan berhasil disalin ke clipboard!");
  };

  const handleShareWA = () => {
    // Encoding teks pesan agar aman dikirim melalui URL WhatsApp
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(generatedMessage)}`;
    window.open(whatsappLink, '_blank');
    setFeedback("Membuka WhatsApp Web/App...");
  };

  const formattedMessageForDisplay = useMemo(() => {
    return generatedMessage.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [generatedMessage]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
          Alat Editor Undangan Personal
        </h1>
        <p className="text-sm mb-6 text-gray-500 dark:text-gray-400">
          Otomatisasi pembuatan link undangan dan template pesan WhatsApp.
        </p>

        {/* --- FORM INPUT --- */}
        <div className="mb-8 border border-gray-300 dark:border-gray-700 p-4 rounded-xl">
          <label htmlFor="guestName" className="block text-lg font-semibold mb-2">
            Nama Tamu (Contoh: Budi & Istri)
          </label>
          <input
            id="guestName"
            type="text"
            value={guestNameInput}
            onChange={(e) => setGuestNameInput(e.target.value)}
            placeholder="Masukkan nama tamu..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 text-base"
          />
          <button
            onClick={handleGenerate}
            className="mt-4 w-full md:w-auto flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            <CornerDownRight className="w-5 h-5 mr-2" />
            Generate Link & Pesan
          </button>
        </div>

        {/* --- HASIL GENERASI --- */}
        {generatedLink && generatedMessage && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Hasil Generasi Pesan</h2>

            {/* Link Hasil */}
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg mb-6 border-l-4 border-green-500">
              <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Link Personal:</p>
              <a 
                href={generatedLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="break-words text-sm font-mono text-green-800 dark:text-green-200 hover:underline"
              >
                {generatedLink}
              </a>
            </div>

            {/* Kotak Pesan */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600 mb-6">
              <p className="text-sm whitespace-pre-line leading-relaxed text-gray-800 dark:text-gray-200">
                {formattedMessageForDisplay}
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center bg-sky-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-600 transition duration-200"
              >
                <Copy className="w-5 h-5 mr-2" />
                Salin Pesan & Link
              </button>
              <button
                onClick={handleShareWA}
                className="flex-1 flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share via WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Feedback/Notifikasi */}
        {feedback && (
          <p className={`mt-4 text-center font-medium ${feedback.includes("berhasil") ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default InvitationEditor;
