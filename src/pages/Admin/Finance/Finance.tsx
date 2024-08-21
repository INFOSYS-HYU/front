import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminFinance = () => {
  const [finances, setFinances] = useState([]);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [quarter, setQuarter] = useState('');
  const [images, setImages] = useState([]);
  const [editingFinance, setEditingFinance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFinances();
  }, []);

  const fetchFinances = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/finance');
      // API 응답 구조에 따라 적절히 수정
      setFinances(response.data.response || []);
    } catch (error) {
      console.error('결산안 불러오기 실패:', error);
      setError('결산안을 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('year', year);
    formData.append('month', month);
    formData.append('quarter', quarter);
    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    try {
      if (editingFinance) {
        await axios.patch(`/api/admin/finance/patch/${editingFinance.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('/api/admin/finance/post', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      fetchFinances();
      resetForm();
    } catch (error) {
      console.error('결산안 저장 실패:', error);
      setError('결산안 저장에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('정말로 이 결산안을 삭제하시겠습니까?')) {
      try {
        await axios.delete(`/api/admin/finance/delete/${id}`);
        fetchFinances();
      } catch (error) {
        console.error('결산안 삭제 실패:', error);
        setError('결산안 삭제에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      }
    }
  };

  const handleEdit = (finance) => {
    setEditingFinance(finance);
    setYear(finance.year);
    setMonth(finance.month);
    setQuarter(finance.quarter);
  };

  const resetForm = () => {
    setYear('');
    setMonth('');
    setQuarter('');
    setImages([]);
    setEditingFinance(null);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">결산안 관리</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="년도"
            className="border p-2"
            required
          />
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="월"
            className="border p-2"
            required
          />
          <input
            type="number"
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
            placeholder="분기"
            className="border p-2"
            required
          />
        </div>
        <input
          type="file"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files))}
          className="mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingFinance ? '결산안 수정' : '결산안 추가'}
        </button>
        {editingFinance && (
          <button type="button" onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
            취소
          </button>
        )}
      </form>

      {finances.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {finances.map((finance) => (
            <div key={finance.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{finance.year}년 {finance.month}월 {finance.quarter}분기</h2>
              {finance.image_url && finance.image_url.length > 0 && finance.image_url.map((url, index) => (
                <img key={index} src={url} alt={`결산안 이미지 ${index + 1}`} className="mt-2 max-w-full h-auto" />
              ))}
              <div className="mt-4">
                <button onClick={() => handleEdit(finance)} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                  수정
                </button>
                <button onClick={() => handleDelete(finance.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>결산안이 없습니다.</p>
      )}
    </div>
  );
};

export default AdminFinance;