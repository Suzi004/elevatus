import config from "../utils/config.json";

export const candidatesList = {
  getAllCandidates,
  uploadCandidatesCV
};

export async function getAllCandidates() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  let response = await fetch(
    `${config.apiUrl}/candidates.json`,
    requestOptions
  );
  let data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
}

export async function uploadCandidatesCV(uploadData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uploadData })
  };

  let response = await fetch(`${config.apiUrl}/cv.json`, requestOptions);
  let data = await response.json();
  if (!response.ok) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
}
