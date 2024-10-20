using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class AddNavigationProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("09b43108-64aa-44a8-80cc-aeec90153e60"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("124573bc-ac58-487c-b0a8-2130782945f3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("1b088116-543a-4eca-8f2e-f6188a76ba17"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("21ac2513-3ce1-4c8c-9477-376897e0c817"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("308d1d92-8035-47e6-a238-dd3d3db8db41"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3ead240b-0e27-4dce-94ab-935b904e42ef"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3fb91549-da81-407f-addb-c631531cb3df"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("7215696c-12e2-4f44-943d-8365ae615fd3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("739e4ef4-c483-4e7c-972e-3ae07d842cf3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("73fa8aed-868f-4181-9e7c-edc9eb7d777a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("771f78b2-ce92-4f2e-8abf-8e82264d18cf"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("77d71d19-b756-4d51-a456-1e7c912d2f32"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("922ee236-1547-4d8f-ba09-13feb87bcd5a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9426edb6-cbc1-4047-bb2e-c899b0e4f878"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ab51a9b3-fb28-4ee8-ba95-7adf7ae2fcfd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ad79c52e-67f3-4a43-8110-31963c73e93b"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b09ce195-8678-45c1-b9fe-a4ee725bb8b8"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b1ba83e9-4ddd-424c-b597-ad45cf1f1e73"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d520ca39-4ca1-45e8-8748-b6052a95fcc6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("df390ad4-49a8-4b39-be97-7eb027ca305d"));

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("0a6e91d2-3b5c-4516-bcab-a80bb0bbc5f0"), "https://i.ibb.co/kGHYJvS/tutorial.jpg", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("0c6d28a6-8650-452c-9b56-a60b9d584d50"), "https://i.ibb.co/6vP8FXv/level10.jpg", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("197d2e24-599c-46bf-8e6c-805fc22779a3"), "https://i.ibb.co/zbKH66t/missions50.jpg", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("22a4d9ae-4cd8-40a9-b00c-a4f398d7085b"), "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("22b02253-1c38-40e5-b18e-d3baaef48fdd"), "https://i.ibb.co/12Y97TW/every-difficulty.jpg", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("36f4d812-c8ac-4c37-944b-98a1e76a8f78"), "https://i.ibb.co/PxmwFbt/life-hacker.jpg", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("3b40ef98-068f-4d2a-9eb5-edc2e3029ab2"), "https://i.ibb.co/DGLpVZx/profile.jpg", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("3edf094e-54c2-41f7-9b24-ae86ba010bba"), "https://i.ibb.co/473Z5Lr/complete-first.jpg", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("5050cf98-a64a-41f2-91aa-dbb2f36294f5"), "https://i.ibb.co/XDhBYzR/level50.jpg", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("5bd4cd60-9f73-4eed-9c42-0219083b65f2"), "https://i.ibb.co/RCYg2d5/daily.jpg", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("6f359690-6cef-4f90-b045-3c4c68dea9a6"), "https://i.ibb.co/sF4BDHg/missions5.jpg", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("76909e32-f0a1-4037-b515-c26cec0fd7fc"), "https://i.ibb.co/zfBdvCS/challenging.jpg", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("8698126b-fd08-47c5-a508-eebd8f81a2ef"), "https://i.ibb.co/rdQ2QkM/missions25.jpg", "Complete 25 missions.", "Quarter Century Quasar", 250 },
                    { new Guid("9f3aacfc-7a81-4ea7-b48c-549c5c52b5e1"), "https://i.ibb.co/tZDHcyJ/all-achievements.jpg", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("b3a9a42b-3738-485a-bcf1-6a64d8e77939"), "https://i.ibb.co/Qcbyf2s/level25.jpg", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("c75992c7-4a7c-4fe9-81a3-39a8fe57186f"), "https://i.ibb.co/KLWDbWg/add-first.jpg", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("cc730155-ffa2-4552-a097-1909e772eaf4"), "https://i.ibb.co/X3JvBZQ/give-up.jpg", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("db7c390c-dcd0-495b-b576-ebb6786fd782"), "https://i.ibb.co/PcKjDDX/level5.jpg", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("eaeb3378-c22a-49d8-82ea-08a263de74eb"), "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("ee55446d-8420-4204-9e28-330ae6a1a806"), "https://i.ibb.co/Jp6PCT0/missions10.jpg", "Complete 10 missions.", "Deca-Task Dynamo", 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("0a6e91d2-3b5c-4516-bcab-a80bb0bbc5f0"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("0c6d28a6-8650-452c-9b56-a60b9d584d50"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("197d2e24-599c-46bf-8e6c-805fc22779a3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("22a4d9ae-4cd8-40a9-b00c-a4f398d7085b"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("22b02253-1c38-40e5-b18e-d3baaef48fdd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("36f4d812-c8ac-4c37-944b-98a1e76a8f78"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3b40ef98-068f-4d2a-9eb5-edc2e3029ab2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3edf094e-54c2-41f7-9b24-ae86ba010bba"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("5050cf98-a64a-41f2-91aa-dbb2f36294f5"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("5bd4cd60-9f73-4eed-9c42-0219083b65f2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6f359690-6cef-4f90-b045-3c4c68dea9a6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("76909e32-f0a1-4037-b515-c26cec0fd7fc"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("8698126b-fd08-47c5-a508-eebd8f81a2ef"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9f3aacfc-7a81-4ea7-b48c-549c5c52b5e1"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b3a9a42b-3738-485a-bcf1-6a64d8e77939"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c75992c7-4a7c-4fe9-81a3-39a8fe57186f"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("cc730155-ffa2-4552-a097-1909e772eaf4"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("db7c390c-dcd0-495b-b576-ebb6786fd782"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("eaeb3378-c22a-49d8-82ea-08a263de74eb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ee55446d-8420-4204-9e28-330ae6a1a806"));

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("09b43108-64aa-44a8-80cc-aeec90153e60"), "https://i.ibb.co/DGLpVZx/profile.jpg", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("124573bc-ac58-487c-b0a8-2130782945f3"), "https://i.ibb.co/sF4BDHg/missions5.jpg", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("1b088116-543a-4eca-8f2e-f6188a76ba17"), "https://i.ibb.co/12Y97TW/every-difficulty.jpg", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("21ac2513-3ce1-4c8c-9477-376897e0c817"), "https://i.ibb.co/zfBdvCS/challenging.jpg", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("308d1d92-8035-47e6-a238-dd3d3db8db41"), "https://i.ibb.co/X3JvBZQ/give-up.jpg", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("3ead240b-0e27-4dce-94ab-935b904e42ef"), "https://i.ibb.co/KLWDbWg/add-first.jpg", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("3fb91549-da81-407f-addb-c631531cb3df"), "https://i.ibb.co/tZDHcyJ/all-achievements.jpg", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("7215696c-12e2-4f44-943d-8365ae615fd3"), "https://i.ibb.co/Jp6PCT0/missions10.jpg", "Complete 10 missions.", "Deca-Task Dynamo", 100 },
                    { new Guid("739e4ef4-c483-4e7c-972e-3ae07d842cf3"), "https://i.ibb.co/zbKH66t/missions50.jpg", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("73fa8aed-868f-4181-9e7c-edc9eb7d777a"), "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("771f78b2-ce92-4f2e-8abf-8e82264d18cf"), "https://i.ibb.co/PcKjDDX/level5.jpg", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("77d71d19-b756-4d51-a456-1e7c912d2f32"), "https://i.ibb.co/Qcbyf2s/level25.jpg", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("922ee236-1547-4d8f-ba09-13feb87bcd5a"), "https://i.ibb.co/XDhBYzR/level50.jpg", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("9426edb6-cbc1-4047-bb2e-c899b0e4f878"), "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("ab51a9b3-fb28-4ee8-ba95-7adf7ae2fcfd"), "https://i.ibb.co/rdQ2QkM/missions25.jpg", "Complete 25 missions.", "Quarter Century Quasar", 250 },
                    { new Guid("ad79c52e-67f3-4a43-8110-31963c73e93b"), "https://i.ibb.co/kGHYJvS/tutorial.jpg", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("b09ce195-8678-45c1-b9fe-a4ee725bb8b8"), "https://i.ibb.co/PxmwFbt/life-hacker.jpg", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("b1ba83e9-4ddd-424c-b597-ad45cf1f1e73"), "https://i.ibb.co/RCYg2d5/daily.jpg", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("d520ca39-4ca1-45e8-8748-b6052a95fcc6"), "https://i.ibb.co/6vP8FXv/level10.jpg", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("df390ad4-49a8-4b39-be97-7eb027ca305d"), "https://i.ibb.co/473Z5Lr/complete-first.jpg", "Complete your first mission.", "Codebreaker Initiate", 25 }
                });
        }
    }
}
