import React from 'react';
import Env from 'lib/env';
import Dialog from 'lib/dialog';

// src="https://d2lfzjbgxt39pr.cloudfront.net/uploads/image/file/2891/5f6eb0f18322b.jpg"

function HostedImage({ id, type, image }) {
  const host = image.id ? Env.get('BANNER_HOST') : Env.get('API_URL');
  const path = image.id
    ? `/uploads/image/file/${image.id}/${image.file}`
    : `/images/${type}/${id}`;

  const trigger = <img alt={id} src={`${host}${path}`} />;

  return (
    <Dialog trigger={trigger}>
      <img alt={id} src={`${host}${path}`} />
    </Dialog>
  );
}

export default HostedImage;
