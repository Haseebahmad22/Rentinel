import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Tenantsidebar';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchNotificationByID } from '../services/tenantnotificationservice';
import { ChevronLeft } from 'lucide-react';

const ViewTenantNotifications = () => {
  const { notificationID } = useParams();
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const tenantUsername = 'rachelbrown'; // Can be dynamic based on current user

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const data = await fetchNotificationByID(tenantUsername, notificationID);
        setNotification(data);
      } catch (err) {
        setError('Failed to load notification details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotification();
  }, [notificationID]);

  const handleBack = () => {
    navigate('/tenantnotifications');
  };

  return (
    <div className="flex font-[Lexend] min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#E6E6E6] flex flex-col items-center pt-10">
        {/* Header */}
        <div className="w-full max-w-5xl px-6">
          <h1 className="text-[#081E4A] text-[32px] font-bold">Notification Details</h1>
          <p className="text-[14px] text-[#4D4D4D] font-light">View your notification details.</p>
        </div>

        {/* White Card */}
        <div className="relative bg-white w-full max-w-4xl mt-8 rounded-lg shadow-md overflow-hidden min-h-[390px]">
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <button
              onClick={handleBack}
              className="w-[32px] h-[32px] rounded-full bg-[#D9D9D9] flex items-center justify-center"
            >
              <ChevronLeft className="text-black w-5 h-5" />
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-full p-10 text-gray-700">
              Loading notification...
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full p-10 text-red-500">
              {error}
            </div>
          ) : notification ? (
            <div className="p-10 pt-16">
              {/* Details Section */}
              <div className="flex flex-col gap-2 text-[14px] text-gray-700">
                <div><span className="font-bold">SUBJECT:</span> {notification?.subject || 'N/A'}</div>
                <div><span className="font-bold">FROM:</span> {notification?.fromOwner || 'N/A'}</div>
                <div><span className="font-bold">PROPERTY NAME:</span> {notification?.propertyName || 'N/A'}</div>
                <div><span className="font-bold">DATE:</span> {notification?.sentDate ? new Date(notification.sentDate).toLocaleDateString() : 'N/A'}</div>
              </div>

              {/* Divider */}
              <hr className="my-6 border-gray-300" />

              {/* Message Content */}
              <div className="text-[14px] text-gray-800 whitespace-pre-wrap">
                {notification?.content || 'No content available.'}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full p-10 text-gray-600">
              Notification not found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewTenantNotifications;
