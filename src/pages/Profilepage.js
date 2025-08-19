import React from "react";
import { Card, Image } from "react-bootstrap";

const ProfilePage = () => {
  
  const user = {
    fullName: "Tanim Mohammed Khan",
    email: "tanimmkhan@gmail.com",
    joined: "2025-0-15",
    
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <div>
      <h1 className="page-title">Profile</h1>
      <Card className="shadow-sm p-4 profile-card">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div>
            <h3 className="mb-1">{user.fullName}</h3>
            <div className="text-muted">{user.email}</div>
            <div className="mt-2"><strong>Date of Joining:</strong> {formatDate(user.joined)}</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
