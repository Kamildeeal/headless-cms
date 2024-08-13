"use client";
import React, { useState } from "react";
import { createClient } from "contentful-management";

export default function AddTripPage() {
  const spaceID = process.env.CONTENTFUL_SPACE_ID as string;
  const accessToken = process.env.ADD_POST_TOKEN as string;
  const [loading, setLoading] = useState(false);

  const [{ title, location, date, rating, price, description }, setFormState] =
    useState({
      title: "",
      location: "",
      date: "",
      rating: "",
      price: "",
      description: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const client = createClient({ accessToken });
      const space = await client.getSpace(spaceID);
      const environment = await space.getEnvironment("master");

      const entry = await environment.createEntry("tripAdvise", {
        fields: {
          title: { "en-US": title },
          location: { "en-US": location },
          date: { "en-US": date },
          rating: { "en-US": parseInt(rating) },
          price: { "en-US": price },
          description: {
            "en-US": {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: description,
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
          },
        },
      });

      await entry.publish();
      setLoading(false);
      // Reset form fields
      setFormState({
        title: "",
        location: "",
        date: "",
        rating: "",
        price: "",
        description: "",
      });
      alert("Trip added successfully!");
    } catch (error) {
      console.error("Error adding trip:", error);
      setLoading(false);
      alert("Error adding trip: " + error);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>Add a new Trip</h2>
      <form onSubmit={addTrip} className="space-y-4">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={handleChange}
            min="1"
            max="10"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
}
