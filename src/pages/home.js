import React from "react";
import AttendanceCard from "../components/attendance-card";
import { graphql, useStaticQuery } from "gatsby";

export default function HomePage() {
  const data = useStaticQuery(HomePageQuery);
  const users = data.cms.User;
  console.log("data", data);
  return (
    <main class="container mx-auto">
      <div class="grid grid-cols-4 gap-4 pt-10 justify-items-center">
        <div class="card w-80 bg-secondary shadow-xl">
          <div class="card-body">
            <h2 class="card-title"></h2>
          </div>
        </div>
        <div class="card w-80 bg-secondary shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Find Groups</h2>
          </div>
        </div>
        <div class="card w-80 bg-secondary shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Find Church</h2>
            <p></p>
          </div>
        </div>
        <div class="card w-80 bg-secondary shadow-xl">
          <div class="card-body">
            <h2 class="card-title"> TODO </h2>
          </div>
        </div>
      </div>
      <div class="carousel w-full pt-10 ">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            class="w-full"
          />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-10">
        <div>
          <div class="collapse bg-base-200 collapse-arrow h-15">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content max-h-2.5">
              Click me to show/hide content
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
              <AttendanceCard></AttendanceCard>
            </div>
          </div>
        </div>
        <div>
          <div class="collapse bg-base-200 collapse-arrow h-15">
            <input type="checkbox" class="peer" />
            <div class="collapse-title bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content max-h-2.5">
              Click me to show/hide content
            </div>
            <div class="collapse-content bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
              <AttendanceCard></AttendanceCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const HomePageQuery = graphql`
  query MyQuery {
    cms {
      User(where: { id: { _eq: "275b4db5-3a32-4780-8a60-95271afac4f1" } }) {
        id
        Address1
        Address2
        city
        country
        state
        isActive
        isLeader
        isChurchAdmin
        isGroupsAdmin
        isCurriculumAdmin
        firstName
        lastName
        phone
        email
        zipCode
        churchId
      }
      church_aggregate {
        nodes {
          address1
          address2
          churchImg
          city
          country
          groups {
            canViewUsers
            churchId
            curriculumId
            groupImg
            groupName
            groupVideo
            id
            isPublic
            meetingDays
            meetingLocation
            meetingTime
          }
          id
          isActive
          name
          phone
          state
          updated_at
          websiteUrl
          zipcode
        }
      }
      groups {
        meetingTime
        meetingLocation
        meetingDays
        isPublic
        id
        groupVideo
        groupName
        groupImg
        curriculumId
        churchId
        canViewUsers
      }
    }
  }
`;
